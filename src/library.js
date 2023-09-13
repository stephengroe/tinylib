// Main library array
const library = [];

// Book class definition
class Book {
  constructor(isbn, title, author, imageUrl) {
    this.isbn = isbn;
    this.title = title;
    this.author = author;
    this.imageUrl = imageUrl;
  }
}

// Dummy content
const ggs = new Book(9780393317558, 'Guns, Germs, and Steel', 'Jared Diamond', 'https://m.media-amazon.com/images/I/51Psz1zS5ZL._AC_UF1000,1000_QL80_.jpg');
library.push(ggs);

export {library, Book};