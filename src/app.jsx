import './meyer-reset.css'
import './App.css'
import Header from './header'
import BookList from './booklist'
import AddBookModal from './addbookmodal'
import Footer from './footer'

function App() {
  return (
    <>
      <Header />
      <div id="wrapper">
        <h1>My Library</h1>
        <BookList />
      </div>
      <AddBookModal />
      <button id="add-button">+</button>
      <Footer />
    </>
  )
}

export default App

/* Add listener to add button */
// plusButton.addEventListener("click",
// () => {
//   document.querySelector("#add-book-modal").showModal();
// });
