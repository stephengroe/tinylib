import React from 'react'

function AddBookModal() {
  return (
    <dialog id="add-book-modal">
      <h2>Add to Library</h2>
      <form>
        <label>
          ISBN
          <input
            type="text"
            name="isbn"
            value="9780812979688"
            ></input>
            <span aria-live="polite" className="error inactive"></span>
        </label>

        <button type="submit">Add Book</button>
        
      </form>
    </dialog>
  )
}

export default AddBookModal;

/* Add event listener to add button */

// addButton.addEventListener("click",
// async (event) => {
//   event.preventDefault();
//   const eventIsbnInput = event.currentTarget.form.isbn;
//   const eventIsbnError = event.currentTarget.form.isbn.nextElementSibling;
//   const enteredIsbn = event.currentTarget.form.isbn.value;

//   if (!isValidIsbn(enteredIsbn)) {
//     eventIsbnInput.classList.add("invalid");
//     eventIsbnError.classList.add("active");
//     eventIsbnError.textContent = "Invalid ISBN";

//   } else {
//     eventIsbnInput.classList.remove("invalid");
//     eventIsbnError.classList.remove("active");

//     await addBook(formatIsbn(enteredIsbn));
//     renderBookList(document.querySelector(".library-container"), library);
//     document.querySelector("#add-book-modal").close();
//   }
// });