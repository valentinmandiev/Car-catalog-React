import style from "./Create.css"
import { useContext } from 'react';

import { CarsContext } from '../../contexts/CarsContext';
import * as carService from '../../services/carService';

const Create=()=>{

  const { carAdd } = useContext(CarsContext);

  const onSubmit = (e) => {
      e.preventDefault();

      const carData = Object.fromEntries(new FormData(e.target));

      carService.create(carData)
          .then(result => {
              carAdd(result)
          });
  };

return(
<section id="createPage">
  <form className="createForm" onSubmit={onSubmit}>
    <img src="./images/car-create.jpg" />
    <div>
      <h2>Create PetPal</h2>
      <div className="name">
        <label htmlFor="name">Brand:</label>
        <input name="name" id="name" type="text" placeholder="Bmw" />
      </div>
      <div className="breed">
        <label htmlFor="breed">Model:</label>
        <input name="model" id="breed" type="text" placeholder="E90" />
      </div>
      <div className="Age">
        <label htmlFor="age">Year:</label>
        <input name="year" id="age" type="number" placeholder="2007" />
      </div>
      <div className="weight">
        <label htmlFor="weight">Horse:</label>
        <input name="horse" id="weight" type="number" placeholder="350 Hp" />
      </div>
      <div className="image">
        <label htmlFor="image">Image:</label>
        <input
          name="imageUrl"
          id="image"
          type="text"
          placeholder="./image/car.jpeg"
        />
      </div>
      <button className="btn" type="submit">
        Create car 
      </button>
    </div>
  </form>
</section>

);
};
export default Create;