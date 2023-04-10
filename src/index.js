import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const BookList = () => {
  return (
    <section className="booklist">
      <Book />
      <Book />
      <Book />
      <Book />
    </section>
  );
};

const Book = () => {
  return (
    <article className="book">
      <img
        src="./images/book1.jpg"
        alt="Dog Man: Twenty Thousand Fleas Under the Sea"
      />
      <h2>Dog Man: Twenty Thousand Fleas Under the Sea</h2>
      <h2>Author</h2>
    </article>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<BookList />, root);
