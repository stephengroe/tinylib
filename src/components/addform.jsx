import React from 'react'
import { formatIsbn, isValidIsbn } from '../isbn';

function AddForm(event) {
  const addBook = async () => {
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
      <div>
        <h2>Auto-add with ISBN</h2>
        <form>
          <label>
            ISBN
            <input type="text" name="isbn" defaultValue="9780812979688"></input>
            <span aria-live="polite" className="error inactive"></span>
          </label>

          <button
            
            type="submit"
            onClick={(e) => {
              e.preventDefault();
              addBook(e);
            }}
            >Add Book</button>
        </form>
      </div>
      <div>
        <h2>Add manually</h2>
        <form>
          <label>
            Title
            <input type="text" name="title" defaultValue="Meditations"></input>
            <span aria-live="polite" className="error inactive"></span>
          </label>
          <label>
            Title
            <input type="text" name="title" defaultValue="Meditations"></input>
            <span aria-live="polite" className="error inactive"></span>
          </label>
        </form>
      </div>
    </dialog>
  )
}

export default AddForm;