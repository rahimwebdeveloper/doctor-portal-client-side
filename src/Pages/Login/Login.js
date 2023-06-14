import React from "react";
import { useForm } from "react-hook-form";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import auth from "../../firebase.inti";
import { Link, useLocation, useNavigate } from "react-router-dom";
import SocialLogin from "../Shared/SocialLogin/SocialLogin";
import Loading from "../Shared/Loadign/Loading";

const Login = () => {
  const [signInWithEmailAndPassword, user, loading1, error] =
    useSignInWithEmailAndPassword(auth);

  const location = useLocation();
  const navigate = useNavigate();

  const from = location?.state?.pathname || "/";

  const {
    register,
    reset,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const onSubmit = (data) => {
    const { email, password } = data;
    console.log(email, password);
    signInWithEmailAndPassword(email, password);

    /// login successfully and clear form value
    reset();
  };

  if (loading1) {
    return <Loading />;
  }

  if (user) {
    navigate(from, { replace: true });
  }

  return (
    <section className=" hero  my-20 flex justify-center items-center text-center">
      <div className="w-1/4 mx-auto">
        <h2 className="text-4xl font-bold">Login</h2>

        <form onSubmit={handleSubmit(onSubmit)}>
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

          <input
            type="submit"
            className="btn btn-accent hover:btn-primary w-full my-2"
          />
        </form>
        <p className="text-md">
          New to Doctor Portal ?
          <Link className="text-secondary " to="/singUp">
            Create ne account
          </Link>
        </p>
        <SocialLogin></SocialLogin>
      </div>
    </section>
  );
};

export default Login;
