import React from "react";
import { Link } from "react-router-dom";
import Button from "../Button";
import "./Hero.scss";

const Hero = ({ openModal }) => {
  return (
    <section className="hero">
      <div className="hero__content-container">
        <h1 className="hero__title">Welcome Growmie,</h1>
        <h2 className="hero__subtitle">Let's grow together!</h2>
        <div className="hero__buttons-container">
          <div className="hero__button-container">
            <Link className="hero__link" to={"/plants"}>
              <Button className="hero__button" text="Get Started" />
            </Link>
          </div>
          <div className="hero__button-container">
            <Button className="hero__button" text="Learn More" onClick={openModal} />
          </div>
        </div>  
      </div>  
    </section>
);
};

export default Hero;