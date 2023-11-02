import { useLoaderData, Link } from "react-router-dom";

export default function Library() {
  const library = useLoaderData();

  if (library.length === 0) {
    return (
      <div className="library-container">
        <h1>My Library (no books)</h1>
        <div className='empty-placeholder'>
          No books here!
        </div>
      </div>
    )
  } else {
    return (
      <div className="library-container">
      <h1>My Library ({library.length} books)</h1>
      {library.map(bookData => {
        return (
          <Link to={`/book/${bookData.id}`} key={bookData.id}>
            <h1>This is a book!</h1>
            <p>Details would go here.</p>
          </Link>
        )
      })}
      </div>
    )
  }
}

// Loader function
export const libraryLoader = async () => {
  let savedLibrary = JSON.parse(localStorage.getItem('library')) || [];
  return savedLibrary;
}