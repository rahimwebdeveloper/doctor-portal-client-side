import { format } from "date-fns";
import React from "react";

const Services = ({ selectedData }) => {
    
  return (
    <div>
      <p>selected Available data {format(selectedData, 'PP')} </p>
    </div>
  );
};

export default Services;
