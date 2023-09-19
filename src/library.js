// Main library array
const library = [];

// Book class definition
class Book {
  constructor(details) {
    this.isbn = details.isbn;
    this.title = details.title;
    this.author = details.author;
    this.imageUrl = details.imageUrl || "https://dummyimage.com/80x120/000000/fff&text=+cover+";
    this.id = Date.now(); // Generate unique ID from timestamp
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
    console.log(bookData);
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

// Delete book from library array
function deleteBook(id) {
  const index = library.flatMap(book => book.id).indexOf(id);
  library.splice(index, 1);
}

// Generate array of book elements
function generateBookList(bookList) {
  const bookArray = [];

  bookList.forEach((book) => {
    // Book container
    const bookContainer = document.createElement("div");
    bookContainer.setAttribute("class", "book-container");
    bookContainer.dataset.bookId = book.id;

    // Cover image
    const bookImage = document.createElement("div");
    bookImage.setAttribute("class", "book-image");
    bookImage.style.backgroundImage = `url(${book.imageUrl})`;

    // Title and author
    const bookTitle = document.createElement("h3");
    bookTitle.setAttribute("class", "book-title");
    bookTitle.textContent = book.title;

    const bookAuthor = document.createElement("p");
    bookAuthor.setAttribute("class", "book-author");
    bookAuthor.textContent = book.author;

    const bookData = document.createElement("div");
    bookData.append(bookTitle, bookAuthor);

    // Delete button
    const deleteButton = document.createElement("button");
    deleteButton.setAttribute("class", "delete-button");
    deleteButton.textContent = "X";

    deleteButton.addEventListener("click", event => {
      event.preventDefault();
      deleteBook(book.id);
      const node = document.querySelector(`[data-book-id='${book.id}']`);
      node.parentNode.removeChild(node);
    });

    // Put it all together
    bookContainer.append(bookImage, bookData, deleteButton);
    bookArray.push(bookContainer);
  });

  return bookArray;
}

export {library, Book, addBook, generateBookList};