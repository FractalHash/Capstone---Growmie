import { useEffect, useState } from "react";
import { useSession } from "@supabase/auth-helpers-react"
import axios from "axios";


import "./Plants.scss"

const Plants = () => {
  const [plants, setPlants] = useState([])
  const session = useSession()

useEffect(() => {
  const fetchPlants = async () => {
    try {
      const response = await axios.get('http://localhost:8008/plants', {
        params: {
          email: session.user.email
        }
      });
      setPlants(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  fetchPlants();
}, []);
  

  return (
    <section className="plants">
      <h2 className="plants__title">Your Plants</h2>
      {/* {plants.map((plant) => { */}
        {/* return ( */}
          {/* <div className="plants__container"> */}
            {/* <h2>{plant.title}</h2> */}
          {/* </div> */}
        {/* ) */}
      {/* })} */}
      <div className="plants__main-container">
        <div  className="plants__container">
          <h3 className="plants__subtitle">Sour Diesel</h3>
          <p>Start Date:</p>
          <p>Harvest Date:</p>
          <p>Grow Mediun:</p>
          <p>Nutrients:</p>
          <p>Grow Enviornmet:</p>
        </div>
        <div  className="plants__container">
          <h3 className="plants__subtitle">OG Kush</h3>
          <p>Start Date:</p>
          <p>Harvest Date:</p>
          <p>Grow Mediun:</p>
          <p>Nutrients:</p>
          <p>Grow Enviornmet:</p>
        </div>
        <div  className="plants__container">
          <h3 className="plants__subtitle">Gorilla Glue</h3>
          <p>Start Date:</p>
          <p>Harvest Date:</p>
          <p>Grow Mediun:</p>
          <p>Nutrients:</p>
          <p>Grow Enviornmet:</p>
        </div>
        <div  className="plants__container">
          <h3 className="plants__subtitle">Girl Scout Cookies</h3>
          <p>Start Date:</p>
          <p>Harvest Date:</p>
          <p>Grow Mediun:</p>
          <p>Nutrients:</p>
          <p>Grow Enviornmet:</p>
          </div>
      </div>
    </section>
  )
}

export default Plants;