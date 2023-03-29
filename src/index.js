import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const BookList = () => {
  return (
    <section>
      <Book />
      <Book />
      <Book />
      <Book />
    </section>
  );
};

const Book = () => {
  return (
    <article>
      <Image />
      <Title />
      <Author />
    </article>
  );
};

const Image = () => (
  <img
    src="https://m.media-amazon.com/images/I/51VyW1qRmSL._SX329_BO1,204,203,200_.jpg"
    alt="Dog Man: Twenty Thousand Fleas Under the Sea"
  />
);
const Title = () => <h2>Dog Man: Twenty Thousand Fleas Under the Sea</h2>;
const Author = () => <h2>Author</h2>;

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<BookList />, root);
