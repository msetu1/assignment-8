import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";

const Navbar = () => {
    const {logOut,user}=useContext(AuthContext)
  const handleLogout = () => {
    logOut()
      .then(() => {})
      .catch();
  };
  const links = (
    <>
      <li className={`${user ? "hidden" : "block"}`}>
        <NavLink
          to="/"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "text-xl font-bold underline underline-offset-2 text-[#dc2626]"
              : ""
          }
        >
          Home
        </NavLink>
      </li>
      <li className={`${user ? "hidden" : "block"}`}>
        <NavLink
          to="/gallery"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "text-xl font-bold underline underline-offset-2 text-[#dc2626]"
              : ""
          }
        >
          Our Gallery
        </NavLink>
      </li>
      <li className={`${user ? "block" : "hidden"}`}>
        <NavLink
          to="/workshop"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "text-xl font-bold underline underline-offset-2 text-[#dc2626]"
              : ""
          }
        >
          Workshop
        </NavLink>
      </li>
      <li className={`${user ? "block" : "hidden"}`}>
        <NavLink
          to="/products"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "text-xl font-bold underline underline-offset-2 text-[#dc2626]"
              : ""
          }
        >
          Products
        </NavLink>
      </li>
      <li className={`${user ? "block" : "hidden"}`}>
        <NavLink
          to="/about"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "text-xl font-bold underline underline-offset-2 text-[#dc2626]"
              : ""
          }
        >
          About us
        </NavLink>
      </li>
      <li className={`${user ? "block" : "hidden"}`}>
        <NavLink
          to="/contacts"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "text-xl font-bold underline underline-offset-2 text-[#dc2626]"
              : ""
          }
        >
          Contacts
        </NavLink>
      </li>


      <li className={`${user ? "hidden" : "block"}`}>
        <NavLink
          to="/login"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "text-xl font-bold underline underline-offset-2 text-[#dc2626]"
              : ""
          }
        >
          Login
        </NavLink>
      </li>
      <li className={`${user ? "hidden" : "block"}`}>
        <NavLink
          to="/register"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "text-xl font-bold underline underline-offset-2 text-[#dc2626]"
              : ""
          }
        >
          Register
        </NavLink>
      </li>
    </>
  );
  return (
    <div className="">
      <div className="navbar py-10 fixed z-10 ">
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
              className="menu menu-sm dropdown-content p-2 shadow text-black  "
            >
              {links}
            </ul>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="flex items-center text-xl font-bold text-black  space-x-5">
            {links}
          </ul>
        </div>
        <div className="navbar-end lg:pr-20">
          {user?.email ? (
            <>
              <div className="mr-5 lg:block hidden">
                <img
                  className="h-[50px] w-[50px] rounded-full"
                  src={user?.photoUrl}
                  title={user?.displayName}
                  alt=""
                />
              </div>
              <button
                onClick={handleLogout}
                className="btn btn-outline text-white mt-5 text-xl px-10 font-bold hover:rounded-full"
              >
                Sign up
              </button>
            </>
          ) : (
            <div className={`${user ? "block" : "hidden"}`}>
              <button className="btn btn-outline text-white mt-5 text-xl px-10 font-bold hover:rounded-full">
                Login
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
   
  );
};

export default Navbar;
