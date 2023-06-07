import React from "react";
import Banner from "../Banner/Banner";
import InfoCards from "../InfoCard/InfoCards";
import Services from "../Service/Services";
import YourTeams from "../YourTeams/YourTeams";
import Appointment from "../Appointment/Appointment";

const Home = () => {
  return (
    <div>
      <Banner />
      <InfoCards></InfoCards>
      <Services></Services>
      <YourTeams></YourTeams>
      <Appointment></Appointment>
    </div>
  );
};

export default Home;
