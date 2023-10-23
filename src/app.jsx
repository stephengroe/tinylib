import './meyer-reset.css'
import './App.css'
import Header from './header'
import BookList from './booklist'
import AddBookModal from './addbookmodal'
import Footer from './footer'

function App() {
  const openModal = () => {
    document.querySelector("#add-book-modal").showModal();
  }

  return (
    <>
      <Header />
      <div id="wrapper">
        <h1>My Library</h1>
        <BookList />
      </div>
      <AddBookModal />
      <button id="add-button" onClick={openModal}>+</button>
      <Footer />
    </>
  )
}

export default App
