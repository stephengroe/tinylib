// Create new book object from OpenLibrary API
async function fetchIsbn(isbn) {
  try {
    const response = await fetch(
      `https://openlibrary.org/api/books?bibkeys=ISBN:${isbn}&format=json&jscmd=data`,
       {
        mode: 'cors'
       }
    );
    let bookData = await response.json();
    
    bookData = bookData[`ISBN:${isbn}`]; // Remove parent 'ISBN:####' object

    const bookDetails = {
      isbn,
      title: bookData.title,
      author: bookData.authors[0]?.name,
      imageUrl: bookData.cover?.medium,
    }

    return bookDetails;
  } catch (error) {
    console.error(error);
  }
}

export default fetchIsbn;