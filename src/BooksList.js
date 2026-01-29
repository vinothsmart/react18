import { memo } from "react";
import Book from "./Book";

const BooksList = ({ books }) => {
  return (
    <section className="booklist">
      {books.map((book, index) => {
        return <Book key={book.id} {...book} number={index} />;
      })}
    </section>
  );
};

export default memo(BooksList);
