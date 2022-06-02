"use strict";
exports.__esModule = true;
exports.BookManager = void 0;
var BookManager = /** @class */ (function () {
    function BookManager() {
        this.books = [];
    }
    BookManager.prototype.addBook = function (book) {
        this.books.push(book);
    };
    BookManager.prototype.getList = function () {
        return this.books;
    };
    BookManager.prototype.findBookById = function (id) {
        var i = -1;
        this.books.forEach(function (item, index) {
            if (item.ID === id) {
                i = index;
            }
        });
        return i;
    };
    BookManager.prototype.deleteBook = function (id) {
        var bookID = this.findBookById(id);
        if (bookID !== -1) {
            this.books.splice(bookID, 1);
        }
        else {
            throw new Error("Khong co id");
        }
    };
    return BookManager;
}());
exports.BookManager = BookManager;
