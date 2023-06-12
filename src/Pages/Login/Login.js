import React from "react";
import { useForm } from "react-hook-form";

const Login = () => {
  const { register, reset, formState:{errors}, handleSubmit } = useForm();
  const onSubmit = (data) => {
    
    console.log(data)

    /// login successfully and clear form value 
    reset()
  };

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
              className="input input-bordered w-full "
              {...register("email", { required: true })}
            />
                  {errors.email?.type === 'required' && <p className="text-left text-red-500" role="alert">Email is required</p>}

          </div>
          <div className="form-control w-full  my-2">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              className="input input-bordered w-full "
              {...register("password", { required: true})}
            />
             {errors.password?.type === 'required' && <p className="text-left text-red-500" role="alert">Password is required</p>}

          </div>
          <label className="label">
            <span className="cursor-pointer">Forget Password</span>
          </label>

          <input type="submit" className="btn btn-accent hover:btn-primary w-full my-2" />

        </form> 
      </div>
    </section>
  );
};

export default Login;
