import React from "react";
import chair from "../../../assets/images/chair.png";
import bgImage from "../../../assets/images/bg.png";

const Banner = () => {
  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage: `url(${bgImage})`,
      }}
    >
      <div className="hero-content   fle x-col lg:flex-row-reverse">
        <img src={chair} className="max-w-lg lg:ml-6 rounded-lg  shadow-2xl" alt="" />
        <div>
          <h1 className="text-5xl font-bold">Your New Smile Starts Here</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <button className="btn text-white bg-gradient-to-r from-[#0FCFEC] to-[#19D3AE]">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
