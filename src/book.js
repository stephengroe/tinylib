function createBook(details) {
  const id = Math.random().toString(36).slice(2,9);
  const isbn = details.isbn;
  const title = details.title;
  const author = details.author;
  const imageUrl = details.imageUrl || "https://dummyimage.com/80x120/000000/fff&text=+cover+";

  return { id, isbn, title, author, imageUrl };
}

export default createBook;