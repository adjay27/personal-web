/* eslint-disable react/prop-types */
import { useState } from "react"
import ThemeSwitcher from "./Switcher.jsx"
import { Link } from "react-router-dom"

const Navbar = () => {

  const [open, setOpen] = useState(false)


  return (
    <header className='top-0 w-full mx-auto flex items-center p-8 px-8 h-[10vh] justify-between bg-light dark:bg-dark'>
      <div className='w-1/3'>

        <Link to="/">
          <h1 className='text-gray-500 dark:text-violet-500 text-2xl font-bold font-mono'>adjay27</h1>
        </Link>

      </div>

      <div className="w-1/3 mx-auto flex  justify-center max-md:hidden">
        <ThemeSwitcher />
      </div>

      <div className="w-1/3 z-99 flex justify-end">
        <div>
          <button onClick={() => setOpen(!open)}
            className={` ${open && "navbarTogglerActive"} block rounded-lg right-4
                    ring-primary focus:ring-2 lg:hidden`}
          >
            <span className="relative my-[6px] block h-[2px] w-[30px] bg-body-color dark:bg-white"></span>
            <span className="relative my-[6px] block h-[2px] w-[30px] bg-body-color dark:bg-white"></span>
            <span className="relative my-[6px] block h-[2px] w-[30px] bg-body-color dark:bg-white"></span>
          </button>
        </div>
        <div>
          <nav id="navbarCollapse" className={` rounded-lg  bg-slate-300 lg:bg-white lg:dark:bg-transparent 
                    flex flex-row
                    dark:bg-dark-2 
                                       
                    lg:static lg:block lg:w-full  ${!open && "hidden"} `}>
            <ul className='absolute lg:relative lg:border-none flex z-10 max-lg:top-16 flex-col max-lg:right-8 max-lg:p-4 max-lg:m-2 dark:bg-dark bg-light border
                     gap-4 lg:flex-row rounded-lg text-black' >
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
      </div>

    </header>
  )
}

export default Navbar

const ListItem = ({ children }) => {
  return (
    <>
      <li>
        <div
          className="flex text-base font-medium text-body-color hover:text-dark dark:text-dark-6 dark:hover:text-white
                    lg:flex-col lg:ml-12
                    md:flex-row
                    ">
          {children}
        </div>
      </li>
    </>
  )
}