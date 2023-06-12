import React from "react";
import google from "../../../assets/logo/google.png"
import facebook from "../../../assets/logo/facebook.png"
import github from "../../../assets/logo/github.png"

const SocialLogin = () => {
  return (
    <>
      <div className="divider">OR</div>
      {/* google */}
      <div className="flex justify-center items-center border-accent w-full border-2 rounded-xl p-2 my-2">
        <img className="w-8 " src={google} alt="" />
        <h1 className="uppercase text-xl ml-2">continue wit google </h1>
      </div>

       {/* github */}
       <div className="flex justify-center items-center border-accent w-full border-2 rounded-xl p-2 my-2">
        <img className="w-8 " src={github} alt="" />
        <h1 className="uppercase text-xl ml-2">continue wit github </h1>
      </div>


      {/* facebook */}
      <div className="flex justify-center items-center border-accent w-full border-2 rounded-xl p-2 my-2">
        <img className="w-8 " src={facebook} alt="" />
        <h1 className="uppercase text-xl ml-2">continue wit facebook </h1>
      </div>
     
    </>
  );
};

export default SocialLogin;
