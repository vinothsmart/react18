import { useCallback, useState } from "react";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";
import people from "./data";

const App = () => {
  const [index, setIndex] = useState(0);
  const { name, job, image, text } = people[index];

  const handlePrevious = useCallback(() => {
    setIndex((currentIndex) =>
      currentIndex === 0 ? people.length - 1 : currentIndex - 1
    );
  }, []);

  const handleNext = useCallback(() => {
    setIndex((currentIndex) =>
      currentIndex === people.length - 1 ? 0 : currentIndex + 1
    );
  }, []);

  const randomPerson = useCallback(() => {
    let randomNumber = Math.floor(Math.random() * people.length);
    if (randomNumber === index) {
      randomNumber = index + 1;
      setIndex((currentIndex) =>
        currentIndex === people.length - 1 ? 0 : currentIndex + 1
      );
    }
  }, [index]);

  return (
    <main>
      <article className="review">
        <div className="img-container">
          <img src={image} alt={name} className="person-img" />
          <span className="quote-icon">
            <FaQuoteRight />
          </span>
        </div>
        <h4 className="authour">{name}</h4>
        <p className="job">{job}</p>
        <p className="info">{text}</p>
        <div className="btn-container">
          <button className="prev-btn" onClick={handlePrevious}>
            <FaChevronLeft />
          </button>
          <button className="next-btn" onClick={handleNext}>
            <FaChevronRight />
          </button>
        </div>
        <button className="btn btn-hipster" onClick={randomPerson}>
          surprise me
        </button>
      </article>
    </main>
  );
};
export default App;
