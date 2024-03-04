import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

const SingleQuestion = ({ id, title, info, activeID, toggleQuestion }) => {
  const isActive = id === activeID;

  return (
    <article className="question">
      <header>
        <h5>{title}</h5>
        <button className="btn" onClick={toggleQuestion(id)}>
          {isActive ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </button>
      </header>
      {isActive && <p>{info}</p>}
    </article>
  );
};

export default SingleQuestion;
