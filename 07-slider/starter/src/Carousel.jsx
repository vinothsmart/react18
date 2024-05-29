import React, { useCallback, useState } from "react";
import { shortList } from "./data";
import { FaQuoteRight } from "react-icons/fa";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const Carousel = () => {
  const [people, setPeople] = useState(shortList);
  const prevSlide = useCallback(() => {
    setPeople((prevPeople) => {
      const lastPerson = prevPeople[prevPeople.length - 1];
      return [
        lastPerson,
        ...prevPeople.filter((person) => person !== lastPerson),
      ];
    });
  }, []);

  const nextSlide = useCallback(() => {
    setPeople((prevPeople) => {
      const [firstPerson, ...rest] = prevPeople;
      return [...rest, firstPerson];
    });
  }, []);

  return (
    <section className="slider-container">
      {people.map((person) => {
        const { id, image, name, title, quote } = person;
        return (
          <article key={id} className="slide">
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
