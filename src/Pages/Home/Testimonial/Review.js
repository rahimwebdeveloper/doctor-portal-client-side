import React from "react";

const Review = ({review}) => {
    const {name, description, adders, profile} = review ;
  return (
    <div className="card p-5 shadow-xl">
      <div className="card-body">
        <p>{description}</p>
      </div>
      <div className="flex items-center">
        <div className="avatar">
          <div className="w-20 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
            <img
              src={profile}
              alt=""
            />
          </div>
        </div>
        <div className="ml-5">
            <h2 className="text-xl font-bold text-accent">{name}</h2>
            <p>{adders}</p>

        </div>
        
      </div>
    </div>
  );
};

export default Review;
