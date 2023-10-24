import React from 'react';

function Book(book) {
  console.log(book);
  return (
    <div className='book-container' data-book-id={book.id}>
      <div
        className='book-image'
        style={{backgroundImage: `url(${book.imageUrl})`}}
      ></div>

      <div>
        <h3 className='book-title'>{book.title}</h3>
        <p className='book-author'>{book.author}</p>
      </div>

      <button
        className='delete-button'
        aria-label='Delete book'
        >X
      </button>

      </div>
  )
}

export default Book;