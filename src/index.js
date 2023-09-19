import "./meyer-reset.css";
import "./style.css";
import {library, addBook, generateBookList} from "./library";

// Render book list
function renderBookList(container, bookList) {
  // Clear existing content
  while (container.firstChild) {
    container.removeChild(container.firstChild);
  }

  const bookArray = generateBookList(bookList);
  bookArray.forEach((book) => container.append(book));
}

// Initial page render
function renderPage() {
  const body = document.querySelector("body");

  // Generate header
  const header = document.createElement("div");
  header.setAttribute("id", "header");

  const title = document.createElement("p");
  title.textContent = "TinyLib";
  header.append(title);

  // Generate wrapper
  const wrapper = document.createElement("div");
  wrapper.setAttribute("id", "wrapper");

  const heading = document.createElement("h1");
  heading.textContent = "My Library";

  // Generate library container and fill it
  const libraryContainer = document.createElement("div");
  libraryContainer.setAttribute("class", "library-container");
  renderBookList(libraryContainer, library);

  wrapper.append(heading, libraryContainer);

  // Generate and bind "+" button
  const plusButton = document.createElement("button");
  plusButton.setAttribute("id", "add-button");
  plusButton.textContent = "+";
  plusButton.addEventListener("click",
    () => {
      document.querySelector("#add-book-modal").showModal();
    });

  // Generate copyright footer
  const copyright = document.createElement("p");
  copyright.setAttribute("id", "copyright");
  copyright.textContent = `© ${new Date().getFullYear()} Stephen Roe`;

  // Generate modal
  const modal = generateModal();

  // Append all elements
  body.append(header, wrapper, modal, plusButton, copyright);
}

// Generate modal
function generateModal() {
  // Modal
  const modal = document.createElement("dialog");
  modal.setAttribute("id", "add-book-modal");

  // Heading
  const heading = document.createElement("h2");
  heading.textContent = "Add to Library";

  // Form
  const form = document.createElement("form");

  // ISBN input
  const isbn = document.createElement("input");
  isbn.setAttribute("type", "number");
  isbn.setAttribute("name", "isbn");
  isbn.setAttribute("id", "form-isbn");
  isbn.setAttribute("value", "9780393317558");

  const isbnLabel = document.createElement("label");
  isbnLabel.setAttribute("for", "form-isbn");
  isbnLabel.textContent = "ISBN";

  // "Add" button
  const addButton = document.createElement("button");
  addButton.setAttribute("type", "submit");
  addButton.textContent = "Add Book";

  addButton.addEventListener("click",
  async (event) => {
    event.preventDefault();
    await addBook(event.currentTarget.form.isbn.value);
    renderBookList(document.querySelector(".library-container"), library);
    document.querySelector("#add-book-modal").close();
  });

  form.append(isbnLabel, isbn, addButton);

  modal.append(heading, form);
  return modal;
}

// Initialization function
async function initialize() {

  // Load default data
  const initData = [9780393317558, 9780743264730, 9780812979688, 9781501111112, 9780099541530];
  const addBooks = [];
  for (let i=0; i<initData.length; i+=1) {
    addBooks.push(addBook(initData[i]));
  }
  await Promise.all(addBooks);

  renderPage();
}

initialize();