import React, { useState, useEffect } from 'react';
import Book from './book';
import library from '../library';

function BookList() {

  if (library.length === 0) {
    return (
      <div className='empty-placeholder'>
        No books here!
      </div>
    )
  } else {
    return (
      <>
      {library.map(bookData => {
        return (
          <Book key={bookData.id} {...bookData} />
        )
      })}
      </>
    )
  }
}

export default BookList;
