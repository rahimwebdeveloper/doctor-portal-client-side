import React, { useState } from "react";
import AppointmentBanner from "../AppointmentBanner/AppointmentBanner";
import AvailableAppointment from "../AvailableAppointment/AvailableAppointment";

const Appointment = () => {
  const [selectedData, setSelectedData] = useState(new Date());
  return (
    <div className="mx-10">
      <AppointmentBanner
        selectedData={selectedData}
        setSelectedData={setSelectedData}
      ></AppointmentBanner>
    <AvailableAppointment selectedData={selectedData}></AvailableAppointment>
    </div>
  );
};

export default Appointment;
