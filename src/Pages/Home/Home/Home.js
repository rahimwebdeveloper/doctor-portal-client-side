import React from "react";
import Banner from "../Banner/Banner";
import InfoCards from "../InfoCard/InfoCards";
import Services from "../Service/Services";
import YourTeams from "../YourTeams/YourTeams";
import Appointment from "../Appointment/Appointment";
import Testimonial from "../Testimonial/Testimonial";
import Contact from "../Contact/Contact";

const Home = () => {
  return (
    <div>
      <Banner />
      <InfoCards></InfoCards>
      <Services></Services>
      <YourTeams></YourTeams>
      <Appointment></Appointment>
      <Testimonial></Testimonial>
      <Contact></Contact>
    </div>
  );
};

export default Home;
