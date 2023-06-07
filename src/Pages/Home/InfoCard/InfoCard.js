import React from "react";

const InfoCard = ({card}) => {
  const {name, description, icon, bgClass} = card; 
  return (
    <div className={`card px-5 card-side shadow-xl ${bgClass} flex items-center text-white `}>
      <figure>
        <img
          src={icon}
          alt="icon"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default InfoCard;
