import React from "react";
import doctor from "../../../assets/images/doctor.png";
import bgImages from "../../../assets/images/appointment.png";

const Appointment = () => {
  return (
    <section
      className="lg:mt-[200px] mt-10 p-5 lg:p-0"
      style={{
        backgroundImage: `url(${bgImages})`,
        backgroundPosition: "cover",
      }}
    >
      <div className="hero ">
        <div className="hero-content p-0 flex-col lg:flex-row">
          <img
            src={doctor}
            className="max-w-lg hidden lg:flex  mt-[-110px] rounded-lg"
            alt=""
          />
          <div>
            <h2 className="text-xl text-primary">Appointment</h2>
            <h1 className="text-3xl font-bold mt-2 text-white">
              Make an appointment Toady
            </h1>
            <p className="py-3 text-white">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsumis that it has a more-or-less normal
              distribution of letters,as opposed to using 'Content here, content
              here', making it look like readable English. Many desktop
              publishing packages and web page
            </p>
            <button className="btn btn-sm btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Appointment;
