import { Link } from "react-router-dom";

const CatalogItem= ({car})=>{
    return(
        <div className="animals-board">
        <article className="service-img">
          <img className="animal-image-cover" src={car.imageUrl} />
        </article>
        <h2 className="name">Brand-{car.name}</h2>
        <h3 className="breed">Model-{car.model}</h3>
        <h3 className="breed">Horse-power-{`${car.horse} HP`}</h3>
        <div className="action">
          <Link className="btn" to={`/catalog/${car._id}`}>
            Details
          </Link>
        </div>
        
      </div>
    );
};

export default CatalogItem