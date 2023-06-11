import { format } from "date-fns";
import React from "react";

const BookingModel = ({ treatment, selectedData }) => {
  const { name, slots } = treatment;
  return (
    <dialog id="BookingModel" className="modal text-center">
      <form method="dialog" className="modal-box max-w-md">
        <button
          htmlFor="BookingModel"
          className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
        >
          ✕
        </button>
        <h3 className="font-bold text-left text-lg">{name}</h3>
        <form className="w-full max-w-full">
          <input
            type="text"
            value={format(selectedData, "PP")}
            disabled
            className="input input-bordered w-full my-2"
          />
          <select className="select bg-base-200 w-full my-2">
            {slots?.map((slot) => (
              <option>{slot}</option>
            ))}
          </select>
          <input
            type="text"
            required
            placeholder="Full Name"
            className="input input-bordered w-full my-2"
          />
          <input
            required
            type="number"
            placeholder="Phone Number"
            className="input input-bordered w-full my-2"
          />
          <input
            required
            type="email"
            placeholder="Your Email"
            className="input input-bordered w-full  my-2"
          />
          <input
            type="submit"
            className="btn  w-full hover:bg-primary"
            value="Submit"
          />
        </form>
      </form>
    </dialog>
  );
};

export default BookingModel;
