import { memo } from "react";
import Book from "./Book";

const BooksList = ({ books }) => {
  return (
    <section className="booklist">
      {books.map((book) => {
        return <Book key={book.id} {...book} number={book.id} />;
      })}
    </section>
  );
};

export default memo(BooksList);
