/**
 * @jest-environment jsdom
 */
const { renderBooks } = require("./app");

describe("Book List Rendering", () => {
  beforeEach(() => {
    document.body.innerHTML = `<ul id="book-list"></ul>`;
  });

  test("renders two books", () => {
    renderBooks();
    const list = document.getElementById("book-list");
    expect(list.children.length).toBe(2);
    expect(list.children[0].textContent).toContain("The Great Gatsby");
    expect(list.children[1].textContent).toContain("1984");
  });
});
