import React from "react";
import { Link, NavLink } from "react-router-dom";
import { signOut } from 'firebase/auth';
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../firebase.inti";
import Loading from "../Loadign/Loading";

const Navbar = () => {
  const [user, loading, error] = useAuthState(auth);


  const handleSingOut = () => {
    signOut(auth);
  };

  if (loading) {
    return <Loading></Loading>;
  }

  if(error){
    return<p> {error?.message}</p>
  }

  const meneItem = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/about">About</NavLink>
      </li>
      <li>
        <NavLink to="/appointment">Appointment</NavLink>
      </li>
      <li>
        <NavLink to="/reviews">Reviews</NavLink>
      </li>
      <li>
        <NavLink to="/contact_us">Contact Us</NavLink>
      </li>
      <li>
        {user ? (
          <li onClick={handleSingOut}>Sing Out</li>
        ) : (
          <NavLink to="/login">Login</NavLink>
        )}
      </li>
    </>
  );

  return (
    <div className="navbar px-5 justify-between bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            {meneItem}
          </ul>
        </div>
        <Link className="btn btn-ghost normal-case text-2xl">
          Doctor Portal
        </Link>
      </div>
      <div className="navbar-center hidden  lg:flex">
        <ul className="menu menu-horizontal px-1">{meneItem}</ul>
      </div>
    </div>
  );
};

export default Navbar;
