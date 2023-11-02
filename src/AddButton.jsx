import createBook from "./book";
import fetchIsbn from "./fetch";

const AddButton = () => {
  
  const handleClick = async (e) => {
    e.preventDefault();
    const bookData = await fetchIsbn(9780812979688);
    const newBook = createBook(bookData);

    const library = JSON.parse(localStorage.getItem('library')) || [];
    library.push(newBook);
    localStorage.setItem("library", JSON.stringify(library));
  };

  return (
    <button
      id="add-button"
      aria-label='Add new book'
      onClick={handleClick}
    >+</button>
  )
}

export default AddButton;
