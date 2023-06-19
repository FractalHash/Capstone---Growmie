import { useEffect } from "react";
import axios from "axios"

const LoginPage = () => {

  
  useEffect( () => {
    const getCredentials = async () => {
      const response = await axios.get(`http://localhost:8008/google`)
    }
    getCredentials()
  }, [])
  

  return (
    <section className="login-page"> 

    </section>
  )
}

export default LoginPage;