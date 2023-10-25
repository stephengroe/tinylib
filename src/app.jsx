import './meyer-reset.css'
import './App.css'
import React, { useState, useEffect } from 'react';
import Header from './components/header'
import BookList from './components/booklist'
import AddForm from './components/addform'
import Footer from './components/footer'
import createBook from "./book";

function App() {
  // Fetch library from local storage
  let savedLibrary = JSON.parse(localStorage.getItem('library')) || [];
  const [library, setLibrary] = useState(savedLibrary);

  useEffect(() => {
    localStorage.setItem("library", JSON.stringify(library));
  }, [library]);

  const addBook = (details) => {
    const book = createBook(details);
    const newLibrary = [...library, book];
    setLibrary(newLibrary);
  }

  const deleteBook = (id) => {
    const newLibrary = library.filter(book => book.id !== id);
    setLibrary(newLibrary);
  }

  const openModal = () => {
    document.querySelector("#new-book-modal").showModal();
  }

  return (
    <>
      <Header />
      <div id="wrapper">
        <h1>My Library</h1>
        <div className="library-container">
          <BookList books={library} deleteBook={deleteBook} />
        </div>
      </div>
      <AddForm books={library} addBook={addBook} />
      <button
        id="add-button"
        aria-label='Add new book'
        onClick={(e) => {
          e.preventDefault();
          openModal();
        }}
        >+</button>
      <Footer />
    </>
  )
}

export default App
