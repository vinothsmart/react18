import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const author = "Dav Pilkey";
const title = "Dog Man: Twenty Thousand Fleas Under the Sea";
const img = "./images/book1.jpg";

const BookList = () => {
  return (
    <section className="booklist">
      <Book job="Front Developer" />
      <Book title="React" experience={5} />
    </section>
  );
};

const Book = (props) => {
  return (
    <article className="book">
      <img src={img} alt={title} />
      <h2>{title}</h2>
      <h4>{author}</h4>
      <p>{props.job}</p>
      <p>{props.title}</p>
      <p>{props.experience}</p>
    </article>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<BookList />, root);
