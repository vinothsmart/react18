import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const books = [
  {
    author: "Dav Pilkey",
    title: "Dog Man: Twenty Thousand Fleas Under the Sea",
    img: "./images/book1.jpg",
    id: 1,
  },
  {
    author: "James Clear",
    title: "Atomic Habits",
    img: "https://images-na.ssl-images-amazon.com/images/I/81wgcld4wxL._AC_UL900_SR900,600_.jpg",
    id: 2,
  },
];

const BookList = () => {
  return (
    <section className="booklist">
      <EventExamples />
      {books.map((book) => {
        return <Book key={book.id} {...book}></Book>;
      })}
    </section>
  );
};

const EventExamples = () => {
  const handleFromInput = (e) => {
    e.preventDefault();
    console.log("hello world");
  };

  const handleButtonClick = (e) => {
    console.log(e);
    console.log(e.target);
    alert("hello world");
  };

  return (
    <section>
      <form>
        <h2>Typical Form</h2>
        <input
          onChange={handleFromInput}
          type="text"
          name="example"
          style={{ margin: "1rem 0" }}
        />
        <button onClick={handleButtonClick}>Click me</button>
      </form>
    </section>
  );
};

const Book = ({ img, title, author }) => {
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
