
import { NavLink } from "react-router-dom";

const NavBar = () => {

  

  const navLinks = (
    <>
      <li>
        <NavLink to="/"
       className={ ({ isActive }) =>
      `btn  btn-sm ${
        isActive ? "bg-[#244D3F] text-white": "bg-white text-black" 
      }`
      }
        >Home</NavLink>
      </li>
      <li>
        <NavLink to="/timeline"
        className={({isActive})=>
          `btn btn-sm ${
            isActive ? "bg-[#244D3F] text-white": "bg-white text-black"
          }`
        
        
        }
        >Timeline</NavLink>
      </li>
      <li>
        <NavLink to="/stats"
        className={({isActive})=>
          `bg bg-sm ${
            isActive ? "bg-[#244D3f] text-white" : "bg-white text-black"
          }`
        }
        
        >Stats</NavLink>
      </li>
    </>
  );

  return (
    <div className="navbar bg-base-100 shadow-sm">
      
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
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
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-10 mt-3 w-52 p-2 shadow"
          >
            {navLinks}
          </ul>
        </div>

        <a className="text-xl font-bold text-[#1F2937]">Keep<span className="text-[#244D3F]">Keepers</span></a>
      </div>

      
      <div className="navbar-end">
       <ul className="menu menu-horizontal px-1">{navLinks}</ul>
      </div>
    </div>
  );
};

export default NavBar;