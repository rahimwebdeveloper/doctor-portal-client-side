import React from "react";
import quote from "../../../assets/icons/quote.svg";
import profile1 from "../../../assets/images/people1.png";
import profile2 from "../../../assets/images/people2.png";
import profile3 from "../../../assets/images/people3.png";
import Review from "./Review";

const Testimonial = () => {
  const reviewData = [
    {
      id: 1,
      name: "Jhon Dhan ",
      adders: "New Work",
      description:
        "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
      profile: profile1,
    },
    {
      id: 2,
      name: "Jhon Dhan ",
      adders: "California",
      description:
        "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
      profile: profile2,
    },
    {
      id: 3,
      name: "Alison Bekar ",
      adders: "Canada",
      description:
        "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
      profile: profile3,
    },
  ];

  return (
    <div className="mx-6 my-16">
      <div className="flex justify-between ">
        <div className="mt-3">
          <h3 className="text-lg text-secondary font-bold ">Testimonial</h3>
          <h2 className="text-3xl ">What Our Patients Says</h2>
        </div>
        <img className="h-24 lg:h-40" src={quote} alt="" />
      </div>

      <div className="grid gap-16 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-3 lg:mt-10">
        {reviewData.map((review) => (
          <Review key={review.id} review={review}></Review>
        ))}
      </div>
    </div>
  );
};

export default Testimonial;
