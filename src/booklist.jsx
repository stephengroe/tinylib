import React, { useState, useEffect } from 'react';
import Book from './book';

function BookList() {

  // Get from local storage
  const storedBooks = JSON.parse(localStorage.getItem('books')) || [];
  const [books, setBooks] = useState(storedBooks);
  
  useEffect(() => {
    localStorage.setItem("books", JSON.stringify(books));
  }, [books]);

  if (books.length === 0) {
    return (
      <div className='empty-placeholder'>
        No books here!
      </div>
    )
  } else {
    return (
      <>
      {books.map(book => {
        <Book

        />
      })}
      </>
    )
  }
}

export default BookList;
