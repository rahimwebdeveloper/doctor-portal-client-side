import React from "react";

const AppointmentOption = ({ a }) => {
  const { name, slots } = a;
  return (
    <div className="card shadow-xl">
      <div className="card-body text-center ">
        <h2 className=" text-center text-2xl text-secondary font-bold">{name}</h2>
        <p>{slots.length > 0 ? slots[0]: "Try Another Day"}</p>
        <p>{slots.length} {slots.length > 1 ? 'Spaces' : 'Space'} available</p>
        <div className="card-actions justify-center">
          <button className="btn">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default AppointmentOption;
