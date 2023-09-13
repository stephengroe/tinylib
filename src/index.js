import './meyer-reset.css';
import './style.css';
import Book from './book';

// Dummy content
const ggs = new Book(9780393317558, 'Guns, Germs, and Steel', 'Jared Diamond');

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
  heading.textContent = "my books";

  const bookList = generateBookList();

  // Generate "add" button
  const addButton = document.createElement('button');
  addButton.setAttribute('id', 'add-button');
  addButton.textContent = '+';

  // Generate copyright footer
  const copyright = document.createElement("p");
  copyright.setAttribute("id", "copyright");
  copyright.textContent = `© ${new Date().getFullYear()} Stephen Roe`;

  // Append all elements
  wrapper.append(heading, bookList);
  body.append(header, wrapper, addButton, copyright);
}

function generateBookList() {
  return JSON.stringify(ggs);
}

renderPage();