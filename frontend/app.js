// app.js

// Simulated book data (since backend isn't working)
const books = [
  {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    url: "https://www.planetebook.com/free-ebooks/the-great-gatsby.pdf"
  },
  {
    title: "1984",
    author: "George Orwell",
    url: "https://www.planetebook.com/free-ebooks/1984.pdf"
  },
  {
    title: "Pride and Prejudice",
    author: "Jane Austen",
    url: "https://www.planetebook.com/free-ebooks/pride-and-prejudice.pdf"
  },
  {
    title: "Frankenstein",
    author: "Mary Shelley",
    url: "https://www.planetebook.com/free-ebooks/frankenstein.pdf"
  },
  {
    title: "Dracula",
    author: "Bram Stoker",
    url: "https://www.planetebook.com/free-ebooks/dracula.pdf"
  },
  {
    title: "Moby-Dick",
    author: "Herman Melville",
    url: "https://www.planetebook.com/free-ebooks/moby-dick.pdf"
  },
  {
    title: "The Adventures of Sherlock Holmes",
    author: "Arthur Conan Doyle",
    url: "https://www.planetebook.com/free-ebooks/the-adventures-of-sherlock-holmes.pdf"
  },
  {
    title: "Alice’s Adventures in Wonderland",
    author: "Lewis Carroll",
    url: "https://www.planetebook.com/free-ebooks/alices-adventures-in-wonderland.pdf"
  }
];


// Function to render books to the DOM
function renderBooks() {
  const list = document.getElementById("book-list");
  if (!list) return;

  books.forEach(book => {
    const li = document.createElement("li");

    const link = document.createElement("a");
    link.href = book.url;
    link.textContent = `${book.title} by ${book.author}`;
    link.target = "_blank";

    li.appendChild(link);
    list.appendChild(li);
  });
}

// Normal browser behavior
document.addEventListener("DOMContentLoaded", renderBooks);

// Export for testing
module.exports = { renderBooks };
