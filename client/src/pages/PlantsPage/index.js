import { useState, useEffect } from "react";
import { useSession } from "@supabase/auth-helpers-react";
import axios from "axios";
import AddPlant from "../../components/AddPlant"
import Plants from "../../components/Plants";

const PlantsPage = () => {
  const [plants, setPlants] = useState([]);
  const session = useSession();

  useEffect(() => {
    fetchPlants();
  }, [session]);

  const fetchPlants = async () => {
    try {
      if (session) {
        const response = await axios.get("http://localhost:8008/plants", {
          params: {
            email: session.user.email,
          },
        });
        setPlants(response.data);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <section className="plants-page">
      <AddPlant fetchPlants={fetchPlants} />
      <Plants plants={plants} fetchPlants={fetchPlants} />
    </section>
  )
}

export default PlantsPage;