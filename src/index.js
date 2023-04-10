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

const author = "Dav Pilkey";
const Book = () => {
  const title = "Dog Man: Twenty Thousand Fleas Under the Sea";
  return (
    <article className="book">
      <img
        src="./images/book1.jpg"
        alt="Dog Man: Twenty Thousand Fleas Under the Sea"
      />
      <h2>{title}</h2>
      <h4>{author}</h4>
    </article>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<BookList />, root);
