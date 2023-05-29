import React from "react";
import { services } from "../data";
import Service from "./Service";
import Title from "./Title";

const Services = () => {
  return (
    <section className="section services" id="services">
      <Title title="our" subTitle="services" />
      <div className="section-center services-center">
        {services.map((serivce) => (
          <Service key={serivce.id} {...serivce} />
        ))}
      </div>
    </section>
  );
};

export default Services;
