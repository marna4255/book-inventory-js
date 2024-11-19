class Book {
  // Constructor to initialize the book properties
  constructor(title, author, ISBN, availableCopies) {
    this.title = title;
    this.author = author;
    this.ISBN = ISBN;
    this.availableCopies = availableCopies;
  }

  // Getter method to check the availability of the book
  get availability() {
    if (this.availableCopies === 0) {
      return "out of stock.";
    } else if (this.availableCopies < 10) {
      return "low stock.";
    } else {
      return "in stock.";
    }
  }

  // Method to sell a book and update stock
  sellBook(copiesSold = 1) {
    if (this.availableCopies >= copiesSold) {
      this.availableCopies -= copiesSold;
      if (this.availableCopies === 0) {
        console.log("The book is now out of stock.");
      }
    } else {
      console.log("Not enough copies to sell.");
    }
  }

  // Method to restock books and increase available copies
  restock(copiesRestocked = 5) {
    this.availableCopies += copiesRestocked;
  }
}

// Constructor to initialize the book properties including edition
class Technical extends Book {
  constructor(title, author, ISBN, availableCopies, edition) {
    super(title, author, ISBN, availableCopies);
    this.edition = edition;
  }
  // Method to get the edition of the technical book
  getEdition() {
    return `The current version of this book is ${this.edition}.`;
  }
}

// Array of book objects with technical books
const books = [
  new Technical(
    "JavaScript: The Good Parts",
    "Douglas Crockford",
    "9780596517748",
    12,
    "Second Edition"
  ),
  new Technical(
    "Eloquent JavaScript",
    "Marijn Haverbeke",
    "9781593279509",
    8,
    "Third Edition"
  ),
  new Technical(
    "You Don’t Know JS",
    "Kyle Simpson",
    "9781491904244",
    2,
    "First Edition"
  ),
];

// Create an element to hold all books on the page
const booksContainer = document.querySelector(".main-container");

//Function to display books on the webpage
const displayBooks = () => {
  booksContainer.innerHTML = ""; //Clear current content
  books.forEach((book) => {
    const bookDiv = document.createElement("div");
    bookDiv.classList.add("book");

    // Create and append book details to the page
    const title = document.createElement("h2");
    title.textContent = book.title;

    const author = document.createElement("p");
    author.innerHTML = `<strong>Author:</strong> ${book.author}`;

    const isbn = document.createElement("p");
    isbn.innerHTML = `<strong>ISBN:</strong> ${book.ISBN}`;

    const availability = document.createElement("p");
    availability.innerHTML = `<strong>Availability:</strong> ${book.availability}`;

    const edition = document.createElement("p");
    edition.innerHTML = `<strong>Edition:</strong> ${book.getEdition()}`;

    // Append all book details to the bookDiv
    bookDiv.appendChild(title);
    bookDiv.appendChild(author);
    bookDiv.appendChild(isbn);
    bookDiv.appendChild(availability);
    bookDiv.appendChild(edition);

    // Append the bookDiv to the main container
    booksContainer.appendChild(bookDiv);
  });
};

//Display the books on the page load
document.addEventListener("DOMContentLoaded", displayBooks);
