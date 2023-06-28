import { NavLink } from "react-router-dom";
import { useSession } from "@supabase/auth-helpers-react";
import "./Nav.scss";

const Nav = ({ onLoginClick, closeModal }) => {
  const session = useSession();

  return (
    <nav className="nav">
      <NavLink to={"/"}>
        <div className="nav__logo"></div>
      </NavLink>  
      <ul className="nav__link-container">
        <NavLink to={"/calendar"} className="nav__link">
          <li className="nav__link">
            Calendar
          </li>
        </NavLink> 
        <NavLink to={"/plants"} className="nav__link">
          <li className="nav__link">
            Plants
          </li>
        </NavLink>
        <li className="nav__link--login" onClick={() => {
          if (onLoginClick) {
            onLoginClick();
          }
          closeModal();
        }}>
          {session?.user?.id ? "Logout" : "Login"}
        </li>
      </ul>
    </nav>   
  );
};

export default Nav;
