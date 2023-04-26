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
    console.log(e.target);
    console.log(e.target.name);
    console.log(e.target.value);
  };

  const handleButtonClick = (e) => {
    console.log(e);
    console.log(e.target);
    alert("hello world");
  };

  const handleSumit = (e) => {
    e.preventDefault();
    console.log(e);
  };

  return (
    <section>
      <form onSubmit={handleSumit}>
        <h2>Typical Form</h2>
        <input
          onChange={handleFromInput}
          type="text"
          name="example"
          style={{ margin: "1rem 0" }}
        />
        <button onClick={handleButtonClick} type="button">
          Click me
        </button>
        <button type="submit">submit</button>
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
