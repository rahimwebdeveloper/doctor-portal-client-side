import React from "react";
import bgContact from "../../../assets/images/appointment.png";

const Contact = () => {
  return (
    <section
      className="mt-20 py-20"
      style={{
        backgroundImage: `url(${bgContact})`,
      }}
    >
      <div className="card mx-auto flex-shrink-0 w-full max-w-md ">
        <div className="card-body text-center">
            <p className="text-xl text-secondary">Contact Us</p>
            <h1 className="text-3xl text-white mb-5">Stay Connected With us</h1>
          <form  action="">
            <input
              type="text"
              placeholder="Email Address"
              className="input input-bordered w-full mb-3"
            />

            <input
              type="text"
              placeholder="Subject "
              className="input input-bordered w-full mb-3"
            />
            <textarea
              className="textarea input-bordered w-full mb-3"
              placeholder="Your Message"
            ></textarea>

            <input
              type="submit"
              className="btn btn-primary w-44"
              value="Submit "
            />
          </form>
        </div>

        {/* <div className="form-control mt-6">
            <input type="submit" className="btn btn-primary">Login</input>
          </div> */}
      </div>
    </section>
  );
};

export default Contact;
