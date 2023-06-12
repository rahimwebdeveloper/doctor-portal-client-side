import React from "react";
import { useForm } from "react-hook-form";

const Login = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <section className=" hero min-h-screen flex justify-center items-center text-center">
      <div className="w-1/4 mx-auto">
        <h2 className="text-4xl font-bold">Login</h2>
        <form onSubmit={handleSubmit(onSubmit)}>

          <div className="form-control w-full ">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              name="email"
              className="input input-bordered w-full "
              {...register("email", { required: true })}
            />
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
          </div>
          <label className="label">
            <span className="label-text-alt">Forget Password</span>
          </label>

          <input type="submit" className="btn btn-accent hover:btn-primary w-full my-2" />

        </form>
      </div>
    </section>
  );
};

export default Login;
