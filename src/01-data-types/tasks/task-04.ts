/**
 * 
 * The school library is building a digital catalog to help students search for books. 
 * Every book must store its ISBN number, title, author's name, total number of pages, 
 * book category, and whether the book is currently available for borrowing.
 * 
 * Task:
 * 1. Define a proper type for the book information.
 * 2. Implement a type that you defined on 3 books data.
 * 
 * display the book data using console.log.
 */


type Book = {
    isbn: string;
    title: string;
    author: string;
    totalPages: number;
    category: string;
    isAvailable: boolean;
};

const book1 : Book = {
    isbn: "978-0134685991",
    title: "Effective Java",
    author: "Joshua Bloch",
    totalPages: 384,
    category: "Programming",
    isAvailable: true
};

const book2 : Book = {
    isbn: "978-0596009205",
    title: "Head First Design Patterns",
    author: "Eric Freeman, Bert Bates, Kathy Sierra, Elisabeth Robson",
    totalPages: 694,
    category: "Programming",
    isAvailable: false
};

const book3 : Book = {
    isbn: "978-0132350884",
    title: "Clean Code",
    author: "Robert C. Martin",
    totalPages: 464,
    category: "Programming",
    isAvailable: true
};

console.log("=== Book Catalog ===");
console.log("Book 1:", book1);
console.log("Book 2:", book2);
console.log("Book 3:", book3);