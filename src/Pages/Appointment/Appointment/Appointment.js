import React, { useState } from "react";
import AppointmentBanner from "../AppointmentBanner/AppointmentBanner";
// import { format } from "date-fns";
import Services from "../Service/Services";

const Appointment = () => {
  const [selectedData, setSelectedData] = useState(new Date());
  return (
    <div>
      <AppointmentBanner
        selectedData={selectedData}
        setSelectedData={setSelectedData}
      ></AppointmentBanner>
      <Services selectedData={selectedData}></Services>
      {/* <p>selected Available data {format(selectedData, 'PP')} </p> */}
    </div>
  );
};

export default Appointment;
