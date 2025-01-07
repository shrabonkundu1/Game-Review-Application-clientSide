import React from "react";
import logo from "../../assets/logo.webp";
import { NavLink } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { TbBrandFlutter } from "react-icons/tb";
import { CgProfile } from "react-icons/cg";
import { MdDiscount } from "react-icons/md";
const Header = () => {
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
      <li>
        <NavLink to="/myreview">
          <CgProfile />
          My Review
        </NavLink>
      </li>
      <li>
        <NavLink to="/mywatchlist">
        <CgProfile />
          My Watchlist
        </NavLink>
      </li>
    </div>
  );
  return (
    // <div className="bg-orange-100">
    //   <div className="navbar w-[95%] mx-auto ">
    //     <div className="navbar-start">
    //       <div className="dropdown">
    //         <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
    //           <svg
    //             xmlns="http://www.w3.org/2000/svg"
    //             className="h-5 w-5"
    //             fill="none"
    //             viewBox="0 0 24 24"
    //             stroke="currentColor"
    //           >
    //             <path
    //               strokeLinecap="round"
    //               strokeLinejoin="round"
    //               strokeWidth="2"
    //               d="M4 6h16M4 12h8m-8 6h16"
    //             />
    //           </svg>
    //         </div>
    //         <ul
    //           tabIndex={0}
    //           className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
    //         >
    //           <li>
    //             <a>Item 1</a>
    //           </li>

    //           <li>
    //             <a>Item 3</a>
    //           </li>
    //         </ul>
    //       </div>
    //       <a className="btn btn-ghost text-xl"><img className="w-10 h-10 rounded-lg mr-1" src={logo} alt="" /><p>Asthetic Gamer</p></a>
    //     </div>
    //     <div className="navbar-center hidden lg:flex">
    //       <ul className="menu menu-horizontal px-1">
    //         <li>
    //           <a>Home</a>
    //         </li>

    //         <li>
    //           <a>Add Review</a>
    //         </li>
    //       </ul>
    //     </div>
    //     <div className="navbar-end">
    //       <a className="btn">Logout</a>
    //     </div>
    //   </div>
    // </div>
    <div>
      <div className="md:navbar py-5 bg-base-100 mb-10  flex justify-between items-center">
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
            <p>Asthetic Gamer</p>
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>
        <div className=" navbar-end">
        <div className="flex gap-2 mr-10">
              <NavLink to="/login" className="btn">
                Login
              </NavLink>
              <NavLink to="/signup" className="btn">
                Sign Up
              </NavLink>
            </div>
          {/* {user ? (
            
            <div className=" md:mr-0 gap-4 flex">
              <div className="flex items-center gap-4">
            <button className="btn rounded-md p-1 md:p-3 text-sm hidden md:grid">{user.email}</button>
              <img
                className="w-10 h-10 rounded-full object-cover"
                src={user.photoURL}
                alt="Profile picture"
              />
            </div>
              <button
                // onClick={handleSignOut}
                className="btn btn-outline btn-ghost"
              >
                Log Out
              </button>
            
            </div>
          ) : (
            <div className="flex gap-2 mr-10">
              <NavLink to="/logIn" className="btn">
                Login
              </NavLink>
              <NavLink to="/signUp" className="btn">
                Sign Up
              </NavLink>
            </div>
          )} */}
        </div>
      </div>
    </div>
  );
};

export default Header;
