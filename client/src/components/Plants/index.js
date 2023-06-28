import { useEffect, useState } from "react";
import { useSession } from "@supabase/auth-helpers-react";
import axios from "axios";
import Button from "../Button"
import "./Plants.scss";

const Plants = ({ plants, fetchPlants }) => {
  const deletePlant = async (id) => {
    try {
      await axios.delete("http://localhost:8008/plants", {
        withCredentials: true,
        data: { plantId: id },
      });
      fetchPlants();
    } catch (error) {
      console.error(error);
    }
  };

  const colors = {
    2: "#33b679",
    6: "#f5511d",
    7: "#039be5",
    3: "#8e24aa",
    1: "#7986cb",
  };

  return (
    <section className="plants">
      <h2 className="plants__title">Your Plants</h2>
      <div className="plants__main-container">
        {plants.map((plant) => {
          const startDate = new Date(plant.start_date);
          const harvestDate = new Date(plant.harvest_date);
          const backgroundColor = colors[plant.color];
          return (
            <div className="plants__container" key={plant.id}>
              <h3 className="plants__subtitle" style={{ backgroundColor }}>
                {plant.name}
              </h3>
              <p className="plants__category">Start Date:</p>
              <p className="plants__text">{startDate.toLocaleDateString()}</p>
              <p className="plants__category">Harvest Date:</p>
              <p className="plants__text">{harvestDate.toLocaleDateString()}</p>
              <p className="plants__category">Grow Medium:</p>
              <p className="plants__text">{plant.growing_medium}</p>
              <p className="plants__category">Nutrients:</p>
              <p className="plants__text">{plant.nutrients}</p>
              <p className="plants__category">Grow Environment:</p>
              <p className="plants__text">{plant.growing_environment}</p>
              <Button
                text="DELETE"
                onClick={() => deletePlant(plant.id)}
              />
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Plants;
