import { useEffect, useState, useContext } from 'react';
import { useParams, Link } from 'react-router-dom';

import * as carService from '../../services/carService';
import { AuthContext } from '../../contexts/AuthContext';


const CarDetails = () => {

  const { carId } = useParams();
  const [currentCar, setCurrentCar] = useState({});
  const { user } = useContext(AuthContext);

  useEffect(() => {
    carService.getOne(carId)
      .then(result => {
        setCurrentCar(result);
      });
  },[])







  return (
    <section id="detailsPage">
      <div className="details">
        <div className="animalPic">
          <img className='imgCar' src={currentCar.imageUrl} />
        </div>
        <div>
          <div className="animalInfo">
            <h1>Brand: {currentCar.name}</h1>
            <h3>Model: {currentCar.model}</h3>
            <h4>Year: {currentCar.year} year</h4>
            <h4>HorsePower: {currentCar.horse} HP</h4>

          </div>
          





          <div className="actionBtn">
            <Link to={`/cars/${carId}/edit`} className="edit">
              Edit
            </Link>
            <Link to={`/cars/${carId}/delete`} className="remove">
              Delete
            </Link>

          </div>
         

        </div>
      </div>
    </section>

  );
};
export default CarDetails;