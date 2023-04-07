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
      <Image />
      <Title />
      <Author />
    </article>
  );
};

const Image = () => (
  <img
    src="./images/book1.jpg"
    alt="Dog Man: Twenty Thousand Fleas Under the Sea"
  />
);

const Title = () => <h2>Dog Man: Twenty Thousand Fleas Under the Sea</h2>;
const Author = () => <h2>Author</h2>;

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<BookList />, root);
