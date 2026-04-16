import { Link, NavLink } from "react-router-dom";
import { FiHome, FiClock, FiBarChart2 } from "react-icons/fi";
import Logo from "../../../assets/logo.png"

const NavBar = () => {

  const navLinks = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            `btn btn-sm flex items-center gap-1 hover:shadow-lg ${
              isActive
                ? "bg-[#244D3F] text-white"
                : "bg-white text-black"
            }`
          }
        >
          <FiHome size={16} />
          Home
        </NavLink>
      </li>

      <li>
        <NavLink
          to="/timeline"
          className={({ isActive }) =>
            `btn btn-sm flex items-center gap-1 hover:shadow-lg ${
              isActive
                ? "bg-[#244D3F] text-white"
                : "bg-white text-black"
            }`
          }
        >
          <FiClock size={16} />
          Timeline
        </NavLink>
      </li>

      <li>
        <NavLink
          to="/stats"
          className={({ isActive }) =>
            `btn btn-sm flex items-center gap-1 hover:shadow-lg ${
              isActive
                ? "bg-[#244D3F] text-white"
                : "bg-white text-black"
            }`
          }
        >
          <FiBarChart2 size={16} />
          Stats
        </NavLink>
      </li>
    </>
  );

  return (
    <div className="navbar bg-base-100 shadow-sm sticky top-0 z-50">

      
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            ☰
          </div>

          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box mt-3 w-52 p-2 shadow"
          >
            {navLinks}
          </ul>
        </div>


            <Link to="/">
           
          
             <img src={Logo} alt="" />
           
            </Link>
        
      </div>

     
      <div className="navbar-end">
        <ul className="menu menu-horizontal px-1 pr-3 flex gap-2">
          {navLinks}
        </ul>
      </div>

    </div>
  );
};

export default NavBar;