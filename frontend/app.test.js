/**
 * @jest-environment jsdom
 */

// app.test.js
const fs = require("fs");
const path = require("path");

describe("Book List Rendering", () => {
  beforeEach(() => {
    document.body.innerHTML = `
      <ul id="book-list"></ul>
    `;

    const appScript = fs.readFileSync(
      path.resolve(__dirname, "app.js"),
      "utf8"
    );
    eval(appScript);
  });

  test("renders two books", () => {
    const list = document.getElementById("book-list");
    expect(list.children.length).toBe(2);
    expect(list.children[0].textContent).toContain("The Great Gatsby");
    expect(list.children[1].textContent).toContain("1984");
  });
});
