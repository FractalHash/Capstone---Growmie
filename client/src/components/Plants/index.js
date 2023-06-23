

import "./Plants.scss"

const Plants = () => {

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