import React, { memo } from "react";
import { tours } from "../data";
import Title from "./Title";
import TourCard from "./TourCard";

const Tours = () => {
  return (
    <section className="section" id="tours">
      <Title title="featured" subTitle="tours" />
      <div className="section-center featured-center">
        {tours.map(({ id, img, date, title, text, days, location, price }) => (
          <TourCard
            key={id}
            img={img}
            date={date}
            title={title}
            text={text}
            days={days}
            location={location}
            price={price}
          />
        ))}
      </div>
    </section>
  );
};

export default memo(Tours);
