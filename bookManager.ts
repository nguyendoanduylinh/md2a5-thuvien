import { Book } from "./book";

export class BookManager {
  books: Book[] = [];
  constructor() {}
  addBook(book: Book) {
    this.books.push(book);
  }
  getList() {
    return this.books;
  }
  findBookById(id: number) {
    let i = -1;
    this.books.forEach((item: Book, index) => {
      if (item.ID === id) {
        i = index;
      }
    });
    return i;
  }
  deleteBook(id: number) {
    let bookID = this.findBookById(id);
    if (bookID !== -1) {
      this.books.splice(bookID, 1);
    } else {
      throw new Error("Khong co id");
    }
  }
}
