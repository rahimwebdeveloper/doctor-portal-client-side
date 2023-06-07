import React from "react";
import fluoride from "../../../assets/images/fluoride.png";
import cavity from "../../../assets/images/cavity.png";
import whitening from "../../../assets/images/whitening.png";
import Service from "./Service";

const Services = () => {
  const serviceData = [
    {
      id: 1,
      name: "Fluoride Treatment",
      description:
        "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
      icon: fluoride,
    },
    {
      id: 2,
      name: "Cavity Filling",
      description:
        "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
      icon: cavity,
    },
    {
      id: 3,
      name: "Teeth Whitening",
      description:
        "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
      icon: whitening,
    },
  ];
  return (
    <div className="mt-32 mx-6">
      <div className="text-center mb-16">
        <h3 className="uppercase text-xl font-bold text-secondary ">our services </h3>
        <h2 className="text-3xl font-medium mt-1">Service We Provide</h2>
      </div>
      <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {serviceData.map((service) => (
          <Service key={service.id} service={service}></Service>
        ))}
      </div>
    
    </div>
  );
};

export default Services;
