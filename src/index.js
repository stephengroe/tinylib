import "./meyer-reset.css";
import "./style.css";
import {library, addBook, generateBookList} from "./library";
import {formatIsbn, isValidIsbn} from "./isbn";

// Render book list
function renderBookList(container, bookList) {
  // Clear existing content
  while (container.firstChild) {
    container.removeChild(container.firstChild);
  }

  const bookArray = generateBookList(bookList);
  bookArray.forEach((book) => container.append(book));
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
  const isbnLabel = document.createElement("label");
  isbnLabel.setAttribute("for", "form-isbn");
  isbnLabel.textContent = "ISBN";

  const isbnInput = document.createElement("input");
  isbnInput.setAttribute("type", "text");
  isbnInput.setAttribute("name", "isbn");
  isbnInput.setAttribute("id", "form-isbn");
  isbnInput.setAttribute("value", "9780812979688");

  const isbnError = document.createElement("span");
  isbnError.setAttribute("aria-live", "polite");
  isbnError.setAttribute("class", "error inactive");

  isbnLabel.append(isbnInput, isbnError);

  // "Add" button
  const addButton = document.createElement("button");
  addButton.setAttribute("type", "submit");
  addButton.textContent = "Add Book";

  addButton.addEventListener("click",
  async (event) => {
    event.preventDefault();
    const eventIsbnInput = event.currentTarget.form.isbn;
    const eventIsbnError = event.currentTarget.form.isbn.nextElementSibling;
    const enteredIsbn = event.currentTarget.form.isbn.value;

    if (!isValidIsbn(enteredIsbn)) {
      eventIsbnInput.classList.add("invalid");
      eventIsbnError.classList.add("active");
      eventIsbnError.textContent = "Invalid ISBN";

    } else {
      eventIsbnInput.classList.remove("invalid");
      eventIsbnError.classList.remove("active");

      await addBook(formatIsbn(enteredIsbn));
      renderBookList(document.querySelector(".library-container"), library);
      document.querySelector("#add-book-modal").close();
    }
  });

  form.append(isbnLabel, addButton);

  modal.append(heading, form);
  return modal;
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
  renderBookList(libraryContainer, library);
}

renderPage()