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
          <Link to={`/book/${bookData.id}`} key={bookData.id} className='book-container'>
            <div
              className='book-image'
              style={{backgroundImage: `url(${bookData.imageUrl})`}}
            ></div>

            <div>
              <h3 className='book-title'>{bookData.title}</h3>
              <p className='book-author'>{bookData.author}</p>
            </div>
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