import React from "react";
import { tours } from "../data";
import Title from "./Title";

const Tours = () => {
  return (
    <section className="section" id="tours">
      <Title title="featured" subTitle="tours" />
      <div className="section-center featured-center">
        {tours.map(({ id, img, date, title, text, days, location, price }) => (
          <article className="tour-card" key={id}>
            <div className="tour-img-container">
              <img src={img} className="tour-img" alt="" />
              <p className="tour-date">{date}</p>
            </div>
            <div className="tour-info">
              <div className="tour-title">
                <h4>{title}</h4>
              </div>
              <p>{text}</p>
              <div className="tour-footer">
                <p>
                  <span>
                    <i className="fas fa-map"></i>
                  </span>
                  {location}
                </p>
                <p>{days}</p>
                <p>from {price}</p>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Tours;
