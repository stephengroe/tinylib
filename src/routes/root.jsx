import '../styles/root.css'
import { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../components/header'
import BookList from '../components/booklist'
import AddDialog from '../components/adddialog'
import Footer from '../components/footer'
import createBook from "../book";
import AddButton from '../AddButton';

export default function Root() {
  let library = [];

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

  return (
    <>
      <Header />
      <div id="wrapper">
        <h1>My Library ({library.length === 1 ? `1 book` : `${library.length} books`})</h1>
        <div className="library-container">
          <Outlet />
        </div>
      </div>
      <AddDialog books={library} addBook={addBook} />
      <AddButton />
      <Footer />
    </>
  )
}
