/* eslint-disable react/prop-types */
/// <reference types="tailwindcss" />
import { useState } from "react";
import { Link } from "react-router-dom";
import Switcher12 from "./Switcher";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className=" w-full h-[10vh] bg-white dark:bg-dark">
      <div className="container mx-auto">
        <div className="relative flex items-right justify-between align-middle ">
          <div className="flex-col align-middle py-6">
            <a href="/" className="flex w-fit">
              
              <h1 className="text-gray-500 dark:text-violet-500 text-2xl font-bold font-mono">
                adjay27
              </h1>
            </a>
          </div>

          <div className="flex w-full top-0 flex-row-reverse ">
            <div>
              <button
                onClick={() => setOpen(!open)}
                id="navbarToggler"
                className={` ${
                  open && "navbarTogglerActive"
                } absolute right-4 block -translate-y-1/2 rounded-lg px-3 py-[6px] ring-primary focus:ring-2 lg:hidden`}
              >
                <span className="relative my-[6px] block h-[2px] w-[30px] bg-body-color dark:bg-white"></span>
                <span className="relative my-[6px] block h-[2px] w-[30px] bg-body-color dark:bg-white"></span>
                <span className="relative my-[6px] block h-[2px] w-[30px] bg-body-color dark:bg-white"></span>
              </button>

              <nav
                // :className="!navbarOpen && 'hidden' "
                id="navbarCollapse"
                className={`absolute right-4 top-full w-full max-w-[250px] rounded-lg bg-white px-6 py-5 shadow dark:bg-dark-2 lg:static lg:block lg:w-full lg:max-w-full lg:shadow-none lg:dark:bg-transparent ${
                  !open && "hidden"
                } `}
              >
                <ul className="block lg:flex">
                  <ListItem>
                    <Link to="/">Home</Link>
                  </ListItem>
                  <ListItem>
                    <Link to="/about">About</Link>
                  </ListItem>
                  <ListItem>
                    <Link to="/projects">Projects</Link>
                  </ListItem>
                </ul>
              </nav>
            </div>
            <Switcher12  />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;

const ListItem = ({ children, NavLink }) => {
  return (
    <>
      <li>
        <a
          href={NavLink}
          className="flex py-2 text-base font-medium text-body-color hover:text-dark dark:text-dark-6 dark:hover:text-white lg:ml-12 lg:inline-flex"
        >
          {children}
        </a>
      </li>
    </>
  );
};
