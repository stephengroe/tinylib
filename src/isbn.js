function formatIsbn(isbn) {
  let result = isbn.toString();

  // Remove dashes
  if (result.includes("-")) {
    result = result.replaceAll("-", "")
  }

  // Uppercase (for x)
  result = result.toUpperCase();

  return result;
}

// Create validation error for ISBN
class ValidationError extends Error {
  constructor(message) {
    super(message);
    this.name = "ValidationError";
  }
}

function validateIsbn(isbn) {
  let revisedIsbn = formatIsbn(isbn);

  // ISBN must be 10 or 13 characters long
  if (!(revisedIsbn.length === 10 || revisedIsbn.length === 13)) {
    throw new ValidationError(`Please enter a valid ISBN of either 10 or 13 characters. This entry is ${revisedIsbn.length} characters.`);
  }
  
  // ISBN must only contain numbers 0-9 and the letter X
  if (!(/^[0-9X]+$/.test(revisedIsbn))) {
    throw new ValidationError(`Valid ISBNs only include numbers 0-9, dashes (-), and sometimes the letter X. This entry contains other characters.`);
  }
  
  // Verify checksums
  const finalDigit = (revisedIsbn.slice(-1) === 'X')
    ? 10
    : Number(revisedIsbn.slice(-1));

  revisedIsbn = revisedIsbn.slice(0, -1);
  let checkSum = 0;
  
  // Checksum calculation for 10-digit ISBN
  if (revisedIsbn.length === 9) {
    for (let i=10; i>=2; i-=1) {
      checkSum += i * Number(revisedIsbn[10 - i]);
    }

    if ((checkSum + finalDigit) % 11 !== 0) {
      throw new ValidationError(`This is an invalid 10-digit ISBN. Please verify each digit is correct.`);
    }
  }

  // Checksum calculation for 13-digit ISBN
  else if (revisedIsbn.length === 12) {
    for (let i=0; i<12; i+=1) {
      if (i % 2 === 0) {
        checkSum += Number(revisedIsbn[i]);
      } else {
        checkSum += 3 * (Number(revisedIsbn[i]));
      }
    }
    
    if ((checkSum + finalDigit) % 10 !== 0) {
      throw new ValidationError(`This is an invalid 13-digit ISBN. Please verify each digit is correct.`);

    }
  }

  return true;
}

export {formatIsbn, validateIsbn, ValidationError};