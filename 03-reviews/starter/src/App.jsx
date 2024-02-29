import { useCallback, useState } from "react";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";
import people from "./data";

const App = () => {
  const [index, setIndex] = useState(0);
  const { name, job, image, text } = people[index];

  const checkNumber = useCallback((number) => {
    if (number > people.length - 1) {
      return 0;
    }
    if (number < 0) {
      return people.length - 1;
    }
    return number;
  }, []);

  const handlePrevious = useCallback(() => {
    setIndex((currentIndex) => {
      const newIndex = currentIndex - 1;
      return checkNumber(newIndex);
    });
  }, [checkNumber]);

  const handleNext = useCallback(() => {
    setIndex((currentIndex) => {
      const newIndex = currentIndex + 1;
      return checkNumber(newIndex);
    });
  }, [checkNumber]);

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
      </article>
    </main>
  );
};
export default App;
