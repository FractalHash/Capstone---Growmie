import React, { useState } from 'react';


const AddPlant = () => {

  const [plantName, setPlantName] = useState('');
  const [stageOfLife, setStageOfLife] = useState('seedling');
  const [growingEnvironment, setGrowingEnvironment] = useState('indoor');
  const [growingMedium, setGrowingMedium] = useState('soil');

  const handlePlantNameChange = (event) => {
    setPlantName(event.target.value);
  };

  const handleStageOfLifeChange = (event) => {
    setStageOfLife(event.target.value);
  };

  const handleGrowingEnvironmentChange = (event) => {
    setGrowingEnvironment(event.target.value);
  };

  const handleGrowingMediumChange = (event) => {
    setGrowingMedium(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Perform form submission logic or data handling here
  };

  return (
    <form className="calendar__form" onSubmit={handleSubmit}>
      <h2>Add a plant</h2>
      <label htmlFor="plant-name">
        <input
          type="text"
          placeholder="Please enter name or strain"
          id="plant-name"
          value={plantName}
          onChange={handlePlantNameChange}
        />
      </label>

      <fieldset>
        <legend>Stage of life</legend>

        <div>
          <input
            type="radio"
            id="seedling"
            name="plant"
            value="seedling"
            checked={stageOfLife === 'seedling'}
            onChange={handleStageOfLifeChange}
          />
          <label htmlFor="seedling">Seedling</label>
        </div>

        <div>
          <input
            type="radio"
            id="vegetative"
            name="plant"
            value="vegetative"
            checked={stageOfLife === 'vegetative'}
            onChange={handleStageOfLifeChange}
          />
          <label htmlFor="vegetative">Vegetative</label>
        </div>

        <div>
          <input
            type="radio"
            id="flowering"
            name="plant"
            value="flowering"
            checked={stageOfLife === 'flowering'}
            onChange={handleStageOfLifeChange}
          />
          <label htmlFor="flowering">Flowering</label>
        </div>
      </fieldset>

      <fieldset>
        <legend>Growing Environment</legend>

        <div>
          <input
            type="radio"
            id="indoor"
            name="environment"
            value="indoor"
            checked={growingEnvironment === 'indoor'}
            onChange={handleGrowingEnvironmentChange}
          />
          <label htmlFor="indoor">Indoor</label>
        </div>

        <div>
          <input
            type="radio"
            id="outdoor"
            name="environment"
            value="outdoor"
            checked={growingEnvironment === 'outdoor'}
            onChange={handleGrowingEnvironmentChange}
          />
          <label htmlFor="outdoor">Outdoor</label>
        </div>
      </fieldset>

      <fieldset>
        <legend>Growing Medium</legend>

        <div>
          <input
            type="radio"
            id="soil"
            name="medium"
            value="soil"
            checked={growingMedium === 'soil'}
            onChange={handleGrowingMediumChange}
          />
          <label htmlFor="soil">Soil</label>
        </div>

        <div>
          <input
            type="radio"
            id="hydroponic"
            name="medium"
            value="hydroponic"
            checked={growingMedium === 'hydroponic'}
            onChange={handleGrowingMediumChange}
          />
          <label htmlFor="hydroponic">Hydroponic</label>
        </div>

        <div>
          <input
            type="radio"
            id="aeroponic"
            name="medium"
            value="aeroponic"
            checked={growingMedium === 'aeroponic'}
            onChange={handleGrowingMediumChange}
          />
          <label htmlFor="aeroponic">Aeroponic</label>
        </div>

        <div>
          <input
            type="radio"
            id="soilless"
            name="medium"
            value="soilless"
            checked={growingMedium === 'soilless'}
            onChange={handleGrowingMediumChange}
          />
          <label htmlFor="soilless">Soilless</label>
        </div>
      </fieldset>

      <label htmlFor="plant-select">
        <select name="pets" id="pet-select">
          <option value="">--Please choose an option--</option>
          <option value="seedling">Seedling</option>
          <option value="rooted-clone">Rooted Clone</option>
          <option value="hamster">Hamster</option>
          <option value="parrot">Parrot</option>
          <option value="spider">Spider</option>
          <option value="goldfish">Goldfish</option>
        </select>
      </label>

      <button type="submit">Submit</button>
    </form>
  );
};

export default AddPlant;


// import React, { useState } from "react";
// import { useNavigate } from "react-router";
// import axios from "axios";

// const AddPlant = () => {
//   const navigate = useNavigate();
//   const [isInvalidName, setIsInvalidName] = useState(false);
//   const [isInvalidDesc, setIsInvalidDesc] = useState(false);
//   const [isInvalidCategory, setIsInvalidCategory] = useState(false);
//   const [isInvalidStatus, setIsInvalidStatus] = useState(false);
//   const [isInvalidQuantity, setIsInvalidQuantity] = useState(false);
//   const [isInvalidWarehouse, setIsInvalidWarehouse] = useState(false);

//   const apiUrl = "http://localhost:8080";



//   const isFormValid = () => {
//     setIsInvalidName(false);
//     setIsInvalidDesc(false);
//     setIsInvalidCategory(false);
//     setIsInvalidStatus(false);
//     setIsInvalidQuantity(false);
//     setIsInvalidWarehouse(false);

//     if (
//       !values.item_name &&
//       !values.description &&
//       !values.category &&
//       !values.status &&
//       !values.quantity &&
//       !values.warehouse_id
//     ) {
//       setIsInvalidName(true);
//       setIsInvalidDesc(true);
//       setIsInvalidCategory(true);
//       setIsInvalidStatus(true);
//       setIsInvalidQuantity(true);
//       setIsInvalidWarehouse(true);
//       return false;
//     } else if (!values.item_name) {
//       setIsInvalidName(true);
//       return false;
//     } else if (!values.description) {
//       setIsInvalidDesc(true);
//       return false;
//     } else if (!values.category) {
//       setIsInvalidCategory(true);
//       return false;
//     } else if (!values.status) {
//       setIsInvalidStatus(true);
//       return false;
//     } else if (values.quantity <= 0 && values.status === "In Stock") {
//       setIsInvalidQuantity(true);
//       return false;
//     } else if (!values.warehouse_id) {
//       setIsInvalidWarehouse(true);
//       return false;
//     } else {
//       return true;
//     }
//   };

//   const handleFormSubmit = async (event) => {
//     event.preventDefault();

//     if (!isFormValid()) {
//       return console.error("Form is not valid");
//     }
//     if (values.status === "Out of Stock") {
//       values.quantity = "0";
//     }
//     values.quantity = values.quantity;

//     try {
//       await axios.post(`${apiUrl}/inventory`, values);
//       navigate("/inventory");
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   const handleInputChange = (event) => {
//     const { name, value } = event.target;
//     setValues({ ...values, [name]: value });
//   };

//   const handleCancel = () => navigate("/inventory");


//   return (
//     <section className="add-inventory">
//       <div className="add-inventory__header">
//         <h1 className="add-inventory__title">Add A New Plant</h1>
//       </div>
//       <form
//         className="add-inventory__form"
//         action="submit"
//         onSubmit={(event) => handleFormSubmit(event)}
//       >
//         <div className="add-inventory__item-details">
//           <h2 className="add-inventory__sub-header">Item Details</h2>
//           <label className="add-inventory__label" htmlFor="item_name">
//             Item Name
//           </label>
//           <input
//             className={`add-inventory__input ${isInvalidName ? "add-inventory__input--error" : ""
//               }`}
//             type="text"
//             name="item_name"
//             id="item_name"
//             placeholder="Item Name"
//             onChange={handleInputChange}
//           />
//           {isInvalidName && (
//             <div className="error-msg">Please enter an item name.</div>
//           )}
//           <label className="add-inventory__label" htmlFor="description">
//             Description
//           </label>
//           <textarea
//             className={`add-inventory__description ${isInvalidDesc ? "add-inventory__description--error" : ""
//               }`}
//             name="description"
//             id="description"
//             placeholder="Please enter a brief description..."
//             onChange={handleInputChange}
//           ></textarea>
//           {isInvalidDesc && (
//             <div className="error-msg">Please enter a description.</div>
//           )}
//           <label className="add-inventory__label" htmlFor="category">
//             Category
//           </label>
//           <select
//             className={`add-inventory__dropdown ${isInvalidCategory ? "add-inventory__dropdown--error" : ""
//               }`}
//             name="category"
//             id="category"
//             onChange={handleInputChange}
//           >
//             <option value="">Please select</option>
//             <option value="Accessories">Accessories</option>
//             <option value="Electronics">Electronics</option>
//             <option value="Gear">Gear</option>
//             <option value="Health">Health</option>
//             <option value="Apparel">Apparel</option>
//           </select>
//           {isInvalidCategory && (
//             <div className="error-msg">Please select a category.</div>
//           )}
//         </div>
//         <div className="add-inventory__item-avail">
//           <h2 className="add-inventory__sub-header">Item Availability</h2>
//           <div className="add-inventory__status-container">
//             <legend className="add-inventory__label add-inventory__label--status">
//               Status
//             </legend>
//             <div className="add-inventory__radio">
//               <input
//                 className="add-inventory__status-input"
//                 type="radio"
//                 name="status"
//                 id="inStock"
//                 value="In Stock"
//                 onChange={handleInputChange}
//               />
//               <label
//                 className={`add-inventory__status-label ${isInvalidStatus ? "add-inventory__status-label--error" : ""
//                   }`}
//                 htmlFor="inStock"
//               >
//                 In Stock
//               </label>
//             </div>
//             <div className="add-inventory__radio">
//               <input
//                 className="add-inventory__status-input"
//                 type="radio"
//                 name="status"
//                 id="outOfStock"
//                 value="Out of Stock"
//                 onChange={handleInputChange}
//               />
//               <label
//                 className={`add-inventory__status-label ${isInvalidStatus ? "add-inventory__status-label--error" : ""
//                   }`}
//                 htmlFor="outOfStock"
//               >
//                 Out of Stock
//               </label>
//             </div>
//           </div>
//           {isInvalidStatus && (
//             <div className="error-msg">Please select a status.</div>
//           )}

//           {values.status === "Out of Stock" ? (
//             ""
//           ) : (
//             <>
//               <label htmlFor="quantity" className="add-inventory__label">
//                 Quantity
//               </label>
//               <input
//                 className={`add-inventory__input add-inventory__input--quantity ${isInvalidQuantity ? "add-inventory__input--error" : ""
//                   }`}
//                 type="text"
//                 name="quantity"
//                 id="quantity"
//                 onChange={handleInputChange}
//                 value={values.quantity}
//               />
//               {isInvalidQuantity && (
//                 <div className="error-msg">Please enter a valid quantity.</div>
//               )}
//             </>
//           )}

//           <label className="add-inventory__label" htmlFor="warehouse_id">
//             Warehouse
//           </label>
//           <select
//             className={`add-inventory__dropdown ${isInvalidWarehouse ? "add-inventory__dropdown--error" : ""
//               }`}
//             name="warehouse_id"
//             id="warehouse_id"
//             onChange={handleInputChange}
//           >
//             <option value="">Please select</option>
//             {warehouses.map((warehouse) => {
//               return (
//                 <option key={warehouse.id} value={warehouse.id}>
//                   {warehouse.warehouse_name}
//                 </option>
//               );
//             })}
//           </select>
//           {isInvalidWarehouse && (
//             <div className="error-msg">Please select a warehouse.</div>
//           )}
//         </div>
//         <div className="add-inventory__form-actions">
//           <button
//             onClick={handleCancel}
//             className="add-inventory__btn add-inventory__btn--cancel"
//             type="button"
//           >
//             Cancel
//           </button>
//           <button className="add-inventory__btn add-inventory__btn--add" type="submit">
//             + Add Item
//           </button>
//         </div>
//       </form>
//     </section>
//   );
// }

// export default AddPlant;