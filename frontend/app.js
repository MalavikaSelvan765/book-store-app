fetch("http://192.168.49.2:30081/books")
  .then(res => res.json())
  .then(books => {
    const list = document.getElementById("book-list");
    books.forEach(book => {
      const li = document.createElement("li");
      li.textContent = `${book.title} by ${book.author}`;
      list.appendChild(li);
    });
  });

