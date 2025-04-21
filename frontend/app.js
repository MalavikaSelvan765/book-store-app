fetch("http://backend:80/books")
  .then(res => res.json())
  .then(books => {
    const list = document.getElementById("book-list");
    books.forEach(book => {
      const li = document.createElement("li");
      li.textContent = `${book.title} by ${book.author}`;
      list.appendChild(li);
    });
  });

