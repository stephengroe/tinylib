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

export default library;
export { addBook, deleteBook };