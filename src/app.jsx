import './meyer-reset.css'
import './App.css'
import Header from './components/header'
import BookList from './components/booklist'
import NewBookModal from './addbook'
import Footer from './components/footer'
import { library } from './library'

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
      <NewBookModal />
      <button id="add-button" onClick={openModal}>+</button>
      <Footer />
    </>
  )
}

export default App
