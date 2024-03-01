import { useCallback, useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

const SingleQuestion = ({ title, info }) => {
  const [showInfo, setShowInfo] = useState(false);

  const handleInfo = useCallback(() => {
    setShowInfo((preVal) => !preVal);
  }, []);

  return (
    <article className="question">
      <header>
        <h5>{title}</h5>
        <button className="btn" onClick={handleInfo}>
          {showInfo ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </button>
      </header>
      {showInfo && <p>{info}</p>}
    </article>
  );
};

export default SingleQuestion;
