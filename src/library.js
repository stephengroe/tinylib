import createBook from "./book";

// Fetch library from local storage
let library = JSON.parse(localStorage.getItem('library')) || [];

function updateLibrary(library) {
  localStorage.setItem("library", JSON.stringify(library));
}

function addBook(details) {
  const book = createBook(details);
  library.push(book);
  updateLibrary(library);
}

function deleteBook(id) {
  library = library.filter(book => book.id !== id);
  updateLibrary(library);
}

// Create new book from OpenLibrary API
async function addBookByIsbn(isbn) {
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
      author: bookData.authors[0].name,
      imageUrl: bookData.cover.medium,
    }

    addBook(bookDetails);
  } catch (error) {
    console.error(error);
  }
}

export default library;
export { addBook, deleteBook, addBookByIsbn };