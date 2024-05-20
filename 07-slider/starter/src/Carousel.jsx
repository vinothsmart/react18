import React, { useState } from "react";
import { shortList } from "./data";

const Carousel = () => {
  const [people, setPeople] = useState(shortList);
  return (
    <section className="slider-container">
      {people.map((person) => {
        const { id, image, name, title, quote } = person;
        return (
          <article key={id} className="slider-item">
            <img src={image} alt={name} className="person-img" />
            <h4>{name}</h4>
            <p className="title">{title}</p>
            <p className="text">{quote}</p>
          </article>
        );
      })}
    </section>
  );
};

export default Carousel;
