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
  }
];

// Render books to the DOM
document.addEventListener("DOMContentLoaded", () => {
  const list = document.getElementById("book-list");

  books.forEach(book => {
    const li = document.createElement("li");

    const link = document.createElement("a");
    link.href = book.url;
    link.textContent = `${book.title} by ${book.author}`;
    link.target = "_blank";

    li.appendChild(link);
    list.appendChild(li);
  });
});
