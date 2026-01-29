import { memo } from "react";

const Book = ({ img, title, author, id }) => {
  // const { img, title, author, number } = props;
  // console.log(props);
  return (
    <article className="book">
      <img src={img} alt={title} />
      <h2>{title}</h2>
      <h4>{author}</h4>
      <span className="number">#{id}</span>
    </article>
  );
};

export default memo(Book);
