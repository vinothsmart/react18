import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import banana from "./books";

const BookList = () => {
  return (
    <section className="booklist">
      {banana.map((book) => {
        return <Book key={book.id} {...book} />;
      })}
    </section>
  );
};

const Book = (props) => {
  const { img, title, author } = props;
  // console.log(props);

  return (
    <article className="book">
      <img src={img} alt={title} />
      <h2>{title}</h2>
      <h4>{author}</h4>
    </article>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<BookList />, root);
