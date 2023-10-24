import {storeData, retrieveData} from "./local-storage";

// Initialize main library array
const library = [];
const storedLibrary = retrieveData();

if (storedLibrary.length > 0) {
  library.push(...storedLibrary);
}

// Book class definition
class Book {
  constructor(details) {
    this.isbn = details.isbn;
    this.title = details.title;
    this.author = details.author;
    this.imageUrl = details.imageUrl || "https://dummyimage.com/80x120/000000/fff&text=+cover+";
    this.id = crypto.randomUUID();
  }
}

// Create new book from OpenLibrary API
async function addBook(isbn) {
  try {
    const response = await fetch(
      `https://openlibrary.org/api/books?bibkeys=ISBN:${isbn}&format=json&jscmd=data`,
       {
        mode: 'cors'
       }
    );
    let bookData = await response.json();

    bookData =  bookData[`ISBN:${isbn}`]; // Remove parent 'ISBN:####' object
    library.push(
      new Book({
        isbn,
        title: bookData.title,
        author: bookData.authors[0].name,
        imageUrl: bookData.cover.medium,
      })
    );
    storeData(library);
  } catch (error) {
    console.error(error);
  }
}

// Delete book from library array
function deleteBook(id) {
  const index = library.flatMap(book => book.id).indexOf(id);
  library.splice(index, 1);
  storeData(library);
}

// const books = [
//   {
//     id: ,
//     title: 'Walden',
//     author: 'Henry David Thoreau',
//     imageUrl: 'https://dummyimage.com/80x120/000000/fff&text=+cover+'
//   }
// ]

addBook('9780812979688');

export default library;
export {library, Book, addBook};