import React from "react";
import google from "../../../assets/logo/google.png";
import facebook from "../../../assets/logo/facebook.png";
import github from "../../../assets/logo/github.png";
import {
  useSignInWithFacebook,
  useSignInWithGithub,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import auth from "../../../firebase.inti";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Loading from "../Loadign/Loading";

const SocialLogin = ({ setCustomLoading }) => {
  const navigate = useNavigate();

  const [signInWithFacebook, user, loading, error] =
    useSignInWithFacebook(auth);
  const [signInWithGoogle, user1, loading1, error1] = useSignInWithGoogle(auth);
  const [signInWithGithub, user2, loading2, error2] = useSignInWithGithub(auth);

  if (user || user1 || user2) {
    toast.success("Successfully Login");
    navigate("/");
  }

  if (loading || loading1 || loading2) {
    return <Loading />;
  }
  return (
    <>
      <div className="divider">OR</div>
      {(error || error1 || error2) && (
        <p className="text-left text-red-500">
          {error?.message || error1?.message || error2?.message}
        </p>
      )}

      {/* google */}
      <div
        onClick={() => {
          signInWithGoogle();
        }}
        className="flex justify-center items-center border-accent w-full border-2 rounded-xl p-2 my-2"
      >
        <img className="w-8 " src={google} alt="" />
        <h1 className="uppercase text-xl ml-2">continue wit google </h1>
      </div>

      {/* github */}
      <div
        onClick={() => {
          signInWithGithub();
        }}
        className="flex justify-center items-center border-accent w-full border-2 rounded-xl p-2 my-2"
      >
        <img className="w-8 " src={github} alt="" />
        <h1 className="uppercase text-xl ml-2">continue wit github </h1>
      </div>

      {/* facebook */}
      <div
        onClick={() => {
          signInWithFacebook();
        }}
        className="flex justify-center items-center border-accent w-full border-2 rounded-xl p-2 my-2"
      >
        <img className="w-8 " src={facebook} alt="" />
        <h1 className="uppercase text-xl ml-2">continue wit facebook </h1>
      </div>
    </>
  );
};

export default SocialLogin;
