import './meyer-reset.css'
import './App.css'
import Header from './components/header'
import BookList from './components/booklist'
import AddForm from './components/addform'
import Footer from './components/footer'

function App() {
  const openModal = () => {
    document.querySelector("#new-book-modal").showModal();
  }

  return (
    <>
      <Header />
      <div id="wrapper">
        <h1>My Library</h1>
        <div className="library-container">
          <BookList />
        </div>
      </div>
      <AddForm />
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
