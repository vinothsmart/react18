import React, { useCallback, useState } from "react";
import { list } from "./data";
import { FaQuoteRight } from "react-icons/fa";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const Carousel = () => {
  const [people] = useState(list);
  const [currentPerson, setCurrentPerson] = useState(0);

  const prevSlide = useCallback(() => {
    setCurrentPerson((prevPerson) => (prevPerson - 1) % people.length);
  }, []);

  const nextSlide = useCallback(() => {
    setCurrentPerson((prevPerson) => (prevPerson + 1) % people.length);
  }, []);

  return (
    <section className="slider-container">
      {people.map((person, personIndex) => {
        const { id, image, name, title, quote } = person;
        return (
          <article
            key={id}
            className="slide"
            style={{
              transform: `translateX(${100 * (personIndex - currentPerson)}%)`,
            }}
            opcacity={personIndex === currentPerson ? 1 : 0}
          >
            <img src={image} alt={name} className="person-img" />
            <h4>{name}</h4>
            <p className="title">{title}</p>
            <p className="text">{quote}</p>
            <FaQuoteRight className="icon" />
          </article>
        );
      })}
      <button className="prev" onClick={prevSlide}>
        <FiChevronLeft />
      </button>
      <button className="next" onClick={nextSlide}>
        <FiChevronRight />
      </button>
    </section>
  );
};

export default Carousel;
