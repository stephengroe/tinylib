

// Book class definition
class Book {
  constructor(details) {
    this.id = crypto.randomUUID();
    this.isbn = details.isbn;
    this.title = details.title;
    this.author = details.author;
    this.imageUrl = details.imageUrl || "https://dummyimage.com/80x120/000000/fff&text=+cover+";
  }
}
