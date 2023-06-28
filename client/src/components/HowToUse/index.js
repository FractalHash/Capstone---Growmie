import React from "react";
import { Link } from "react-router-dom";
import "./HowToUse.scss";

const HowToUse = ({ closeModal }) => {
  return (
    <section className="modal">
      <div className="modal__overlay">
        <div className="modal__content">
          <h2 className="modal__title">How To Use:</h2>
          <p className="modal__text">
            Growmie is a scheduling tool developed for cannabis growers to help automate the growing process. Simply fill
            out the <Link className="modal__link" to="/plants">Add Plant</Link> form and Growmie will generate a schedule for you to follow to ensure an optimal growing
            experience. Growmie will remind you when you should water, feed, transplant, defoliate, change growing cycles,
            and even when to consider harvesting your plants.
          </p>
          <div className="modal__text-space"/>
          <p className="modal__text">
            Growmie integrates seamlessly with Google so you can get your schedule directly from your Google Calendar once
            one has been created.
          </p>
          <button className="modal__close-button" onClick={closeModal}>
            Close
          </button>
        </div>
      </div>
    </section>
  );
};

export default HowToUse;
