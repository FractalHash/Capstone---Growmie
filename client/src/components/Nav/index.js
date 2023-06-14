import { NavLink } from "react-router-dom"
import "./Nav.scss"

const Nav = () => {

  return (
    <nav className="nav">
      <NavLink to={"/"}>
        <div className="nav__logo"></div>
      </NavLink>  
      <ul className="nav__link-container">
        <NavLink to={"/calendar"} className="nav__link">
          <li className="nav__link">
            Calender
          </li>
        </NavLink> 
        <NavLink to={"/login"} className="nav__link">
          <li className="nav__link">
            Login
          </li>
        </NavLink>  
      </ul>
    </nav>   
  )
}

export default Nav