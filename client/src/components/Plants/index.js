import { useEffect, useState } from "react";
import { useSession } from "@supabase/auth-helpers-react"
import axios from "axios";


import "./Plants.scss"

const Plants = () => {
  const [plants, setPlants] = useState([])
  const session = useSession()

useEffect(() => {
  fetchPlants();
}, [session]);
  
const fetchPlants = async () => {
  try {
    if (session) {
      const response = await axios.get('http://localhost:8008/plants', {
        params: {
          email: session.user.email
        }
      });
      setPlants(response.data);
    }
  } catch (error) {
    console.error(error);
  }
};
  
const deletePlant =  async (id) => {
  try {
    await axios
      .delete('http://localhost:8008/plants',
        { withCredentials: true, data: { plantId: id } }
    );
    fetchPlants()
  } catch (error) {
    console.error(error);
  }
}
  

return (
  <section className="plants">
    <h2 className="plants__title">Your Plants</h2>
    <div className="plants__main-container">
    {plants.map((plant) => {
          const startDate = new Date(plant.start_date);
          const harvestDate = new Date(plant.harvest_date);

      return (
        <div className="plants__container" key={plant.id}>
          <h3 className="plants__subtitle">{plant.name}</h3>
          <p>Start Date:<br/>{startDate.toLocaleDateString()}</p>
          <p>Harvest Date:<br/>{harvestDate.toLocaleDateString()}</p>
          <p>Grow Medium:<br/>{plant.growing_medium}</p>
          <p>Nutrients:<br/>{plant.nutrients}</p>
          <p>Grow Environment:<br />{plant.growing_environment}</p>
          <button onClick={() => deletePlant(plant.id)}>
            Delete
          </button>
        </div>
      );
    })}
      </div>
    </section>
  )
}

export default Plants;