import React from "react";

const AppointmentOption = ({ option, setTreatment }) => {
  const { name, slots } = option;
  return (
    <div className="card shadow-xl">
      <div className="card-body text-center ">
        <h2 className=" text-center text-2xl text-secondary font-bold">
          {name}
        </h2>
        <p>{slots.length > 0 ? slots[0] : "Try Another Day"}</p>
        <p>
          {slots.length} {slots.length > 1 ? "Spaces" : "Space"} available
        </p>
        <div className="card-actions justify-center">
          <button
            disabled={slots.length === 0}

            className={`btn  text-white ${slots.length === 0 ? "" : "bg-gradient-to-r from-[#0FCFEC] to-[#19D3AE]"}`}
            onClick={() => {
              window.BookingModel?.showModal();
              setTreatment(option);
            }}
          >
            Book Appointment
          </button>
        </div>
      </div>
    </div>
  );
};

export default AppointmentOption;
