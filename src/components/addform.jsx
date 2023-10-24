import React, { useState } from 'react';
import FormInput from './forminput';
import { formatIsbn, validateIsbn, ValidationError } from '../isbn';
import { addBook } from '../library';
import fetchIsbn from '../fetch.js';

function AddForm() {
  const [isbn, setIsbn] = useState('9780812979688');
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [imageUrl, setImageUrl] = useState('');

  const fetchFromIsbn = async (isbn) => {
    try {
      const formattedIsbn = formatIsbn(isbn);
      validateIsbn(formattedIsbn);

      const newBook = await fetchIsbn(formattedIsbn);

      setTitle(newBook.title);
      setAuthor(newBook.author);
      setImageUrl(newBook.imageUrl);
    } catch(error) {
      if (error instanceof ValidationError) {
        const input = document.querySelector("input[name='isbn']");
        input.classList.add('invalid');

        const errorSpan = input.nextElementSibling;
        errorSpan.textContent = error.message;
        errorSpan.classList.add("active");

        errorSpan.textContent = error.message;
        errorSpan.classList.remove('inactive');
        errorSpan.classList.add('active');
      } else {
        console.error(error);
      }
    }
  }

  const generateBook = (e) => {
    const newBook = {
      isbn: e.target.form.isbn.value,
      title: e.target.form.title.value,
      author: e.target.form.author.value,
      imageUrl: e.target.form.imageUrl.value,
    }

    addBook(newBook);
    document.querySelector("#new-book-modal").close();
  }




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
  
  //     await createBookElement(formatIsbn(enteredIsbn)); // addBook in Library
      
  //   }
  // }

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
                fetchFromIsbn(e.target.form.isbn.value);
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

          <FormInput
            type='url'
            label='Image URL'
            name='imageUrl'
            value={imageUrl}
            onChange={e => {
              setImageUrl(e.target.value)
            }}
          />

          <button
            type="submit"
            onClick={(e) => {
              e.preventDefault();
              generateBook(e);
            }}
          >Add Book</button>

        </form>
      </div>
    </dialog>
  )
}

export default AddForm;