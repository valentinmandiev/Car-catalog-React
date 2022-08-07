import { useContext, useEffect, useState } from "react";
import { useParams, useNavigate } from 'react-router-dom';

import * as carService from '../../services/carService';
import { CarsContext } from "../../contexts/CarsContext";

const EditCar = () => {
  const [currentCar, setCurrentCar] = useState({});
  const { carEdit } = useContext(CarsContext);
  const { carId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
      carService.getOne(carId)
          .then(carData => {
            
              setCurrentCar(carData);
          })
  }, [])

  const onSubmit = (e) => {
      e.preventDefault();

      const carData = Object.fromEntries(new FormData(e.target));

      carService.edit(carId, carData)
          .then(result => {
            console.log(carId,result,carData)
              carEdit(carId, result);
              navigate(`/catalog/${carId}`)
          });
  };




    return (
      <section id="editPage">
      <form className="editForm" onSubmit={onSubmit}>
        <img src={currentCar.imageUrl} />
        <div>
          <h2>Edit PetPal</h2>
          <div className="name">
            <label htmlFor="name">Brand:</label>
            <input name="name" id="name" type="text" defaultValue={currentCar.name} />
          </div>
          <div className="breed">
            <label htmlFor="breed">Model:</label>
            <input name="model" id="breed" type="text" defaultValue={currentCar.model}/>
          </div>
          <div className="Age">
            <label htmlFor="age">Year:</label>
            <input name="year" id="age" type="text" defaultValue={currentCar.year} />
          </div>
          <div className="weight">
            <label htmlFor="weight">Horsepower:</label>
            <input name="horse" id="weight" type="text" defaultValue={currentCar.horse} />
          </div>
          <div className="image">
            <label htmlFor="image">Image:</label>
            <input
              name="imageUrl"
              id="image"
              type="text"
              defaultValue={currentCar.imageUrl}
            />
          </div>
          <button className="btn" type="submit">
            Edit car
          </button>
        </div>
      </form>
    </section>
    
    );


};
export default EditCar;