import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { books } from "./books";
import BooksList from "./BooksList";

const BookList = () => {
  return (
    <>
      <h1>Best Sellers</h1>
      <BooksList books={books} />
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<BookList />, root);
