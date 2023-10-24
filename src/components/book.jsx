import React from 'react';
import '../styles/book.css';

function Book({ bookData, bookList }) {
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

      <button
        className='delete-button'
        onClick={(e) => {
          e.preventDefault();
          
        }}
        >Delete
      </button>

      <button
        className='edit-button'
        onClick={(e) => {
          e.preventDefault();
        }}
        >Edit
      </button>

      </div>
  )
}

export default Book;