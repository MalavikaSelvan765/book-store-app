fetch("/api/books")
  .then(res => res.json())
  .then(books => {
    const list = document.getElementById("book-list");
    books.forEach(book => {
      const li = document.createElement("li");
      const link = document.createElement("a");
      link.href = book.url;
      link.textContent = `${book.title} by ${book.author}`;
      link.target = "_blank"; // opens in new tab
      li.appendChild(link);
      list.appendChild(li);
    });
  });

