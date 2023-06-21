import { Link } from "react-router-dom";

import "./Hero.scss"

const Hero = () => {

  return (
    <section className="hero"> 
      <div className="hero__title-container">
        <h1 className="hero__title">
          Welcome Growmie
        </h1>
        <h2 className="hero__subtitle">Let's grow together</h2>
      </div>  
      <div className="hero__button-container">
        <Link to={"/plants"}>
          <button className="hero__button">Get started</button>
        </Link>
        <button className="hero__button">How to use</button>
      </div>
    </section>
  )
}

export default Hero