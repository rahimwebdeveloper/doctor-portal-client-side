import { format } from "date-fns";
import React from "react";

const BookingModel = ({ treatment, selectedData, setTreatment }) => {
  const { name, slots } = treatment;

  const date = format(selectedData, "PP");

  const handleBooking = (event) => {
    event.preventDefault();

    const form = event.target;
    const slot = form.slot.value;
    const pName = form.name.value;
    const email = form.email.value;
    const phone = form.email.value;

    const bookingData = {
      name,
      pName,
      slot,
      date,
      email,
      phone,
    };

    console.log(bookingData);

    //server side data post dan close it
    setTreatment(null);
  };

  return (
    <dialog id="BookingModel" className="modal text-center">
      <form
        onSubmit={handleBooking}
        method="dialog"
        className="modal-box max-w-md"
      >
        <button
          onClick={() => setTreatment()}
          className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
        >
          ✕
        </button>
        <h3 className="font-bold text-left text-lg">{name}</h3>
        <div>
          <input
            type="text"
            value={format(selectedData, "PP")}
            disabled
            className="input input-bordered w-full my-2"
          />
          <select name="slot" className="select bg-base-200 w-full my-2">
            {slots?.map((slot, i) => (
              <option key={i}>{slot}</option>
            ))}
          </select>

          <input
            name="name"
            type="text"
            required
            placeholder="Full Name"
            className="input input-bordered w-full my-2"
          />

          <input
            name="email"
            required
            type="email"
            placeholder="Your Email"
            className="input input-bordered w-full  my-2"
          />
          <input
            name="phone"
            required
            type="number"
            placeholder="Phone Number"
            className="input input-bordered w-full my-2"
          />
          <input
            type="submit"
            className="btn  w-full hover:bg-primary"
            value="Submit"
          />
        </div>
      </form>
    </dialog>
  );
};

export default BookingModel;
