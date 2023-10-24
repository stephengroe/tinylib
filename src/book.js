function createBook(details) {
  const id = crypto.randomUUID();
  const isbn = details.isbn;
  const title = details.title;
  const author = details.author;
  const imageUrl = details.imageUrl || "https://dummyimage.com/80x120/000000/fff&text=+cover+";

  return { id, isbn, title, author, imageUrl };
}

export default createBook;