import './meyer-reset.css';
import './style.css';
import {Book, library, addBook} from './library';

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

  // Generate library container and fill it
  const libraryContainer = document.createElement('div');
  libraryContainer.setAttribute('class', 'library-container');
  renderBookList(libraryContainer, library);

  wrapper.append(heading, libraryContainer);

  // Generate and bind "add" button
  const addButton = document.createElement('button');
  addButton.setAttribute('id', 'add-button');
  addButton.textContent = '+';
  addButton.addEventListener('click', () => {
    addBook();
    renderBookList(
      document.querySelector('.library-container'),
      library
    );
  });

  // Generate copyright footer
  const copyright = document.createElement("p");
  copyright.setAttribute("id", "copyright");
  copyright.textContent = `© ${new Date().getFullYear()} Stephen Roe`;

  // Append all elements
  body.append(header, wrapper, addButton, copyright);
}

function renderBookList(container, bookList) {
  // Clear existing content
  while (container.firstChild) {
    container.removeChild(container.firstChild);
  }

  const bookArray = generateBookList(bookList);
  bookArray.forEach(book => container.append(book));
}

// Iterate through list of books
function generateBookList(bookList) {
  const bookArray = [];

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
    bookArray.push(bookContainer);
  });
  
  return bookArray;
}

renderPage();