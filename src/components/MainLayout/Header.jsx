import React, { useContext, useEffect, useState } from "react";
import logo from "../../assets/logo.webp";
import { NavLink } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { TbBrandFlutter } from "react-icons/tb";
import { CgProfile } from "react-icons/cg";
import { AuthContext } from "../../providers/AuthProvider";
import { toast } from "react-toastify";
import { Cursor, Typewriter } from "react-simple-typewriter";
import { Tooltip as ReactTooltip } from "react-tooltip";

const Header = () => {
  const { user, logOutUser } = useContext(AuthContext);
  const [darkMode,setDarkMode] =useState(false)

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  },[darkMode])

  const handleSignOut = () => {
    logOutUser()
      .then(() => {
        logOutUser(null);
        toast.success("Logout successfully!", {
          position: "top-center",
          autoClose: 2000,
        });
      })
      .catch((error) => {});
  };

  const links = (
    <div className="space-x-5 flex items-center ">
      <li>
        <NavLink to="/">
          <FaHome />
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to="/allreview">
          <TbBrandFlutter />
          All Review
        </NavLink>
      </li>
      <li>
        <NavLink to="/addreview">
          <TbBrandFlutter />
          Add Review
        </NavLink>
      </li>

      {user && (
        <>
          <li>
            <NavLink to="/myReviews">
              <CgProfile />
              My Review
            </NavLink>
          </li>
        </>
      )}
      {user && (
        <>
          <li>
            <NavLink to="/watchList">
              <CgProfile />
              Game Watchlist
            </NavLink>
          </li>
        </>
      )}
       <li>
        <button  onClick={() => setDarkMode(!darkMode)}
          className="px-4 py-2 rounded bg-blue-500 dark:bg-yellow-500 text-white"> {darkMode ? 'Light Mode' : 'Dark Mode'}</button>
      </li>
    </div>
  );
  return (
    <div >
      <div className="md:navbar py-2 bg-base-100   flex justify-between items-center  dark:bg-[#1d232a] text-black dark:text-white">
        <div className="dropdown mr-10">
          <div tabIndex={0} role="button" className="btn btn-ghost  lg:hidden">
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
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-[24rem] p-2 shadow flex justify-between items-center "
          >
            {links}
          </ul>
        </div>
        <div className="navbar-start mr-5">
          <a className="btn btn-ghost text-xl">
            <img className="w-10 h-10 rounded-lg mr-1" src={logo} alt="" />
            <p className="font-semibold">
              Asthetic
              <span>
                <Typewriter
                  words={[" Gamer"]}
                  loop={8}
                  typeSpeed={100}
                  deleteSpeed={80}
                ></Typewriter>
              </span>
              <span className="text-blue-900">
                <Cursor cursorStyle="_"></Cursor>
              </span>
            </p>
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>
        <div className=" navbar-end">
          {user ? (
            <div className="  flex items-center gap-5 md:mr-8">
              <img
                data-tooltip-id="my-tooltip-1"
                className="w-10 h-10 rounded-full object-cover"
                src={user.photoURL}
                alt="Profile picture"
              />
              <ReactTooltip
                id="my-tooltip-1"
                className="z-10 "
                place="top"
                variant="info"
                content={user.displayName}
              />

              <button
                onClick={handleSignOut}
                className="btn btn-outline dark:text-white btn-ghost"
              >
                Log Out
              </button>
            </div>
          ) : (
            <div className="flex gap-2 mr-10">
              <NavLink to="/login" className="btn">
                Login
              </NavLink>
              <NavLink to="/signup" className="btn">
                Sign Up
              </NavLink>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
