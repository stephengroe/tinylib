import React from 'react';
import '../styles/book.css';

function Book({ bookData, bookList, deleteBook }) {
  return (
    <div className='book-container' data-book-id={bookData.id}>
      <div
        className='book-image'
        style={{backgroundImage: `url(${bookData.imageUrl})`}}
      ></div>

      <div>
        <h3 className='book-title'>{bookData.title}</h3>
        <p className='book-author'>{bookData.author}</p>
      </div>

      <ul className='book-actions'>
        <li>
          <button
            className='delete-button'
            onClick={(e) => {
              e.preventDefault();
              deleteBook(bookData.id);  
            }}
            >Delete
          </button>
        </li>
        <li>
          <button
            className='edit-button'
            onClick={(e) => {
              e.preventDefault();
            }}
            >Edit
          </button>
        </li>
      </ul>

      </div>
  )
}

export default Book;