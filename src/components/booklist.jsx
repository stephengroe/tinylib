import React, { useState, useEffect } from 'react';
import Book from './book';
import '../styles/booklist.css';


function BookList({ books }) {

  if (books.length === 0) {
    return (
      <div className='empty-placeholder'>
        No books here!
      </div>
    )
  } else {
    return (
      <>
      {books.map(bookData => {
        return (
          <Book key={bookData.id} bookData={bookData} bookList={books} />
        )
      })}
      </>
    )
  }
}

export default BookList;
