import CatalogItem from "./CatalogItem/CatalogItem";

const Catalog=({cars})=>{

return(

<>
  
  <section id="dashboard">
    <h2 className="dashboard-title">The most sport cars</h2>
    <div className="animals-dashboard">
      
      
    {cars.length > 0
                ? cars.map(x => <CatalogItem key={x._id} car={x} />)
                :   <div>
                <p className="no-pets">No cars in catalog</p>
              </div>
            }
      
     
    
    </div>
  </section>
</>


);

};
export default Catalog;