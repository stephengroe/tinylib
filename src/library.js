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

// Create new book
async function addBook(isbn) {
  try {
    const response = await fetch(
      `https://openlibrary.org/api/books?bibkeys=ISBN:${isbn}&format=json&jscmd=data`,
       {
        mode: 'cors'
       }
    );
    let bookData = await response.json();

    // OpenLibrary API returns object nested inside of ISBN
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


// const principles = new Book(
//   9781501124020,
//   "Principles",
//   "Ray Dalio",
//   "https://m.media-amazon.com/images/I/41q+cPPAsgL._SY445_SX342_.jpg",
// );

// Dummy content
const ggs = new Book({
  isbn: 9780393317558,
  title: "Guns, Germs, and Steel",
  author: "Jared Diamond",
  imageUrl: "https://m.media-amazon.com/images/I/51Psz1zS5ZL._AC_UF1000,1000_QL80_.jpg",
});
library.push(ggs);

// Iterate through list of books
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