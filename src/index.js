import './meyer-reset.css';
import './style.css';
import {Book, library} from './library';

// Initial page render
function renderPage() {
  const body = document.querySelector('body');

  // Generate header
  const header = document.createElement('div');
  header.setAttribute('id', 'header');

  const title = document.createElement('h1');
  title.textContent = "TinyLib";
  header.append(title);

  // Generate wrapper
  const wrapper = document.createElement('div');
  wrapper.setAttribute('id', 'wrapper');

  const heading = document.createElement('h2');
  heading.textContent = "My Books";

  wrapper.append(heading, generateBookList(library));

  // Generate "add" button
  const addButton = document.createElement('button');
  addButton.setAttribute('id', 'add-button');
  addButton.textContent = '+';

  // Generate copyright footer
  const copyright = document.createElement("p");
  copyright.setAttribute("id", "copyright");
  copyright.textContent = `© ${new Date().getFullYear()} Stephen Roe`;

  // Append all elements
  body.append(header, wrapper, addButton, copyright);
}

// Iterate through list of books
function generateBookList(bookList) {
  const libraryContainer = document.createElement('div');
  libraryContainer.setAttribute('class', 'library-container');

  bookList.forEach(book => {
    const bookContainer = document.createElement('div');
    bookContainer.setAttribute('class', 'book-container');

    const bookImage = document.createElement('div');
    bookImage.setAttribute('class', 'book-image');
    bookImage.style.backgroundImage = `url(${book.imageUrl})`;

    const bookData = document.createElement('div');

    const bookTitle = document.createElement('h3');
    bookTitle.setAttribute('class', 'book-title');
    bookTitle.textContent = book.title;

    const bookAuthor = document.createElement('p');
    bookAuthor.setAttribute('class', 'book-author');
    bookAuthor.textContent = book.author;

    bookData.append(bookTitle, bookAuthor);
    bookContainer.append(bookImage, bookData);
    libraryContainer.append(bookContainer);
  });
  
  return libraryContainer;
}

renderPage();