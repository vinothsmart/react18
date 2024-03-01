import { useCallback, useState } from "react";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";
import people from "./data";

const App = () => {
  const [index, setIndex] = useState(0);
  const { name, job, image, text } = people[index];

  const handleNext = useCallback(() => {
    setIndex((currentIndex) => (currentIndex + 1) % people.length);
  }, []);

  const handlePrevious = useCallback(() => {
    setIndex(
      (currentIndex) => (currentIndex - 1 + people.length) % people.length
    );
  }, []);

  const randomPerson = useCallback(() => {
    let randomNumber = Math.floor(Math.random() * people.length);
    if (randomNumber === index) {
      randomNumber = index + 1;
    }
    setIndex(randomNumber % people.length);
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
