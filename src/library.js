// Main library array
const library = [];

// Book class definition
class Book {
  constructor(details) {
    this.isbn = details.isbn;
    this.title = details.title;
    this.author = details.author;
    this.imageUrl = details.imageUrl || "https://dummyimage.com/80x120/000000/fff&text=+cover+";
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

    // Remove parent ISBN object returned by OpenLibrary API
    bookData =  bookData[`ISBN:${isbn}`];
    library.push(
      new Book({
        isbn,
        title: bookData.title,
        author: bookData.authors[0].name,
        imageUrl: bookData.cover.medium,
      })
    );
  } catch (error) {
    console.error(error);
  }
}

// Generate array of book elements
function generateBookList(bookList) {
  const bookArray = [];

  bookList.forEach((book) => {
    const bookContainer = document.createElement("div");
    bookContainer.setAttribute("class", "book-container");

    const bookImage = document.createElement("div");
    bookImage.setAttribute("class", "book-image");
    bookImage.style.backgroundImage = `url(${book.imageUrl})`;

    const bookData = document.createElement("div");

    const bookTitle = document.createElement("h3");
    bookTitle.setAttribute("class", "book-title");
    bookTitle.textContent = book.title;

    const bookAuthor = document.createElement("p");
    bookAuthor.setAttribute("class", "book-author");
    bookAuthor.textContent = book.author;

    bookData.append(bookTitle, bookAuthor);
    bookContainer.append(bookImage, bookData);
    bookArray.push(bookContainer);
  });

  return bookArray;
}

export {library, Book, addBook, generateBookList};