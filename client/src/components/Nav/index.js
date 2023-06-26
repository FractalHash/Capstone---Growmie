import { NavLink } from "react-router-dom";
import "./Nav.scss";

const Nav = ({ onLoginClick }) => {
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
        <li className="nav__link" onClick={onLoginClick}>
          Login
        </li>
      </ul>
    </nav>   
  );
};

export default Nav;
