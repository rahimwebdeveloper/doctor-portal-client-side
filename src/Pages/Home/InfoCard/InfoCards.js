import React from "react";
import clock from "../../../assets/icons/clock.svg";
import marker from "../../../assets/icons/marker.svg";
import phone from "../../../assets/icons/phone.svg";
import InfoCard from "./InfoCard";

const InfoCards = () => {
  const cardData = [
    {
      id: 1,
      name: "Opening Hours",
      description: "Open 9.00 am to 5.00pm Everyday",
      icon: clock,
      bgClass: "bg-primary",
    },
    {
      id: 2,
      name: "Visit Location",
      description: "New Work City, United States",
      icon: marker,
      bgClass: "bg-accent",
    },
    {
      id: 3,
      name: "Contact Us now",
      description: "+000 123 456789",
      icon: phone,
      bgClass: "bg-primary",
    },
  ];

  return (
    <div className="mx-8 grid gap-6 grid-clos-1 md:grid-cols-2 lg:grid-cols-3">
      {cardData.map((card) => (
        <InfoCard key={card.id} card={card}></InfoCard>
      ))}
    </div>
  );
};

export default InfoCards;
