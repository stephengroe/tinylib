import React from 'react'
import { formatIsbn, isValidIsbn } from './isbn';

function NewBookModal(event) {
  const addBook = async () => {
    console.log(event);
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
  
      await createBookElement(formatIsbn(enteredIsbn)); // addBook in Library
      document.querySelector("#new-book-modal").close();
    }
  }

  return (
    <dialog id="new-book-modal">
      <h2>Add to Library</h2>
      <form>
        <label>
          ISBN
          <input type="text" name="isbn" defaultValue="9780812979688"></input>
          <span aria-live="polite" className="error inactive"></span>
        </label>

        <button type="submit" onClick={(e) => addBook(e)}>Add Book</button>

      </form>
    </dialog>
  )
}

export default NewBookModal;