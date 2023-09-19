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

  // Generate and bind "add" button
  const addButton = document.createElement("button");
  addButton.setAttribute("id", "add-button");
  addButton.textContent = "+";
  addButton.addEventListener("click",
    async () => {
      await addBook(9780743264730);
      renderBookList(document.querySelector(".library-container"), library)
    });

  // Generate copyright footer
  const copyright = document.createElement("p");
  copyright.setAttribute("id", "copyright");
  copyright.textContent = `© ${new Date().getFullYear()} Stephen Roe`;

  // Append all elements
  body.append(header, wrapper, addButton, copyright);
}

addBook(9780393317558).then(() => renderPage());