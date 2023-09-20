export default function isValidIsbn(isbn) {

  // Uppercase (for x) and remove dashes
  let revisedIsbn = isbn.toUpperCase();
  if (isbn.includes("-")) {
    revisedIsbn = revisedIsbn.replaceAll("-", "")
  }

  // ISBN must be 10 or 13 characters long
  if (!(revisedIsbn.length === 10 || revisedIsbn.length === 13)) {
    return false;
  }
  
  // ISBN must only contain numbers 0-9 and the letter X
  if (!(/^[0-9X]+$/.test(revisedIsbn))) {
    return false;
  }
  
  // Verify checksum for 10-digit ISBN
  if (revisedIsbn.length === 10) {
    let checkSum = 0;
    let finalDigit = revisedIsbn.slice(-1);
    if (finalDigit === 'X') { finalDigit = 10; }
    revisedIsbn = revisedIsbn.slice(0, -1);
    
    for (let i=10; i>1; i-=1) {
      checkSum += i * Number(revisedIsbn[10 - i]);
    }

    if ((checkSum + finalDigit) % 11 !== 0) {
      return false
    }
  }

  return true;
}