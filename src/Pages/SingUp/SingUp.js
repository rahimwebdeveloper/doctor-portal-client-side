import React, { useState } from "react";
import SocialLogin from "../Shared/SocialLogin/SocialLogin";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

import {
  useCreateUserWithEmailAndPassword,
  useUpdateProfile,
} from "react-firebase-hooks/auth";
import auth from "../../firebase.inti";
import Loading from "../Shared/Loadign/Loading";

const SingUp = () => {
  const [displayName, setDisplayName] = useState("");
  const navigate = useNavigate();
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);

  const [updateProfile, updating, error2] = useUpdateProfile(auth);

  const {
    register,
    reset,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const onSubmit = async (data) => {
    const { email, password, name } = data;
    createUserWithEmailAndPassword(email, password);
    setDisplayName(name);
    /// login successfully and clear form value
    reset();
  };

  if (loading || updating) {
    return <Loading />;
  }

  if (user) {
    // console.log(user);
    navigate("/");
  }

  return (
    <section className=" hero  my-20 flex justify-center items-center text-center">
      <div className="w-1/4 mx-auto">
        <h2 className="text-4xl font-bold">Sing Up</h2>

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-control w-full ">
            <label className="label">
              <span className="label-text">Your Name</span>
            </label>
            <input
              type="text"
              className="input input-bordered w-full "
              {...register("name", { required: true })}
            />
            {errors.name?.type === "required" && (
              <p className="text-left text-red-500" role="alert">
                Name is required
              </p>
            )}
          </div>
          <div className="form-control w-full ">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              className="input input-bordered w-full "
              {...register("email", { required: true })}
            />
            {errors.email?.type === "required" && (
              <p className="text-left text-red-500" role="alert">
                Email is required
              </p>
            )}
          </div>
          <div className="form-control w-full  my-2">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              className="input input-bordered w-full "
              {...register("password", { required: true })}
            />
            {errors.password?.type === "required" && (
              <p className="text-left text-red-500" role="alert">
                Password is required
              </p>
            )}
          </div>
          <label className="label">
            <span className="cursor-pointer">Forget Password</span>
          </label>
          {error && <p className="text-left text-red-500">{error.message}</p>}
          {error2 && <p className="text-left text-red-500">{error2.message}</p>}

          <input
            onClick={async () => {
              const success = await updateProfile({ displayName });
              if (success) {
                navigate("/");
              }
            }}
            type="submit"
            className="btn btn-accent hover:btn-primary w-full my-2"
          />
        </form>
        <p className="text-md">
          Already have an account ?
          <Link className="text-secondary ml-2 " to="/login">
            Login
          </Link>
        </p>
        <SocialLogin></SocialLogin>
      </div>
    </section>
  );
};

export default SingUp;
