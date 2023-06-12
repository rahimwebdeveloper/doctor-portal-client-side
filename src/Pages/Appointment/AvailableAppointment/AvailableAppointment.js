import { format } from "date-fns";
import React, { useEffect, useState } from "react";
import AppointmentOption from "./AppointmentOption";
import BookingModel from "../BookingModel/BookingModel";

const AvailableAppointment = ({ selectedData }) => {
  const [availableAppointment, setAvailableAppointment] = useState([]);

  const [treatment, setTreatment] = useState({});

  useEffect(() => {
    fetch("appointmentOptions.json")
      .then((res) => res.json())
      .then((data) => setAvailableAppointment(data));
  }, []);

  return (
    <section className="my-16 ml-10 md:ml-0 ">
      <p className="text-center font-bold text-secondary text-xl">
        Selected Available data {format(selectedData, "PP")}
      </p>
      <div className=" grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-10">
        {availableAppointment.map((option) => (
          <AppointmentOption
            key={option._id}
            option={option}
            setTreatment={setTreatment}
          ></AppointmentOption>
        ))}
      </div>
      {treatment&& (
        <BookingModel
          setTreatment={setTreatment}
          treatment={treatment}
          selectedData={selectedData}
        ></BookingModel>
      )}
    </section>
  );
};

export default AvailableAppointment;
