import React, { useState, useEffect } from 'react';
import FormInput from './forminput';
import { formatIsbn, isValidIsbn } from '../isbn';

function AddForm(event) {
  const [isbn, setIsbn] = useState('9780812979688');
  const [title, setTitle] = useState('Meditations');
  const [author, setAuthor] = useState('Marcus Aurelius');

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
        <h2>Add Book</h2>
        <form onSubmit={e => {
          e.preventDefault();
        }}>
          <div>
            <FormInput
              type='text'
              label='ISBN'
              name='isbn'
              value={isbn}
              onChange={e => {
                setIsbn(e.target.value)
              }}
            />

            <button
              type="button"
              onClick={(e) => {
                e.preventDefault();
                addBook(e);
              }}
            >Fetch from ISBN</button>
          </div>

          <FormInput
            type='text'
            label='Title'
            name='title'
            value={title}
            onChange={e => {
              setTitle(e.target.value)
            }}
          />

          <FormInput
            type='text'
            label='Author'
            name='author'
            value={author}
            onChange={e => {
              setAuthor(e.target.value)
            }}
          />

          <button
            type="submit"
          >Add Book</button>

        </form>
      </div>
    </dialog>
  )
}

export default AddForm;