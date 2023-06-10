import { format } from "date-fns";
import React, { useEffect, useState } from "react";
import AppointmentOption from "./AppointmentOption";

const AvailableAppointment = ({ selectedData }) => {
  const [availableAppointment, setAvailableAppointment] = useState([]);

  useEffect(() => {
    fetch("appointmentOptions.json")
      .then((res) => res.json())
      .then((data) => setAvailableAppointment(data));
  }, []);

  console.log(availableAppointment);

  availableAppointment.map(service => console.log(service.name))

  
  return (
    <section className="my-16">
      <p className="text-center font-bold text-secondary text-xl">
        Selected Available data {format(selectedData, "PP")}{" "}
      </p>
      <div className="grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-10">
       {
        availableAppointment.map(a => <AppointmentOption
        key={a._id}
        a={a}
        ></AppointmentOption>)
       }
      </div>
    </section>
  );
};

export default AvailableAppointment;
