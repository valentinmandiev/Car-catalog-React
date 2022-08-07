import { useEffect, useState, Suspense } from "react";
import { Routes, Route, useNavigate } from 'react-router-dom';

import * as carService from './services/carService';
import { AuthContext } from './contexts/AuthContext';
import { CarsContext } from './contexts/CarsContext';



import CarDetails from './components/CarDetails/CarDetails'
import Create from "./components/Create/Create";
import Catalog from "./components/Catalog/Catalog";
import Footer from "./components/Footer/Footer";
import Header from './components/Header/Header';
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import EditCar from "./components/EditCar/EditCar"
import { useLocalStorage } from "./hooks/useLocalStorage";
import Logout from "./components/Logout/Logut";


function App() {
  const [cars, setCars] = useState([]);
    const [auth, setAuth] = useLocalStorage('auth', {});
    const navigate = useNavigate();

    const userLogin = (authData) => {
        setAuth(authData);
    };

    const userLogout = () => {
        setAuth({});
    };

   ;

    const carAdd = (carData) => {
        setCars(state => [
            ...state,
            carData,
        ]);

        navigate('/catalog');
    };

    const carEdit = (carId, carData) => {
        setCars(state => state.map(x => x._id === carId ? carData : x));
    }

  

    useEffect(() => {
        carService.getAll()
            .then(result => {
                setCars(result);
            });
    }, []);


  return (
    <AuthContext.Provider value={{ user: auth, userLogin, userLogout }}>

    <div id="box">


      <Header />


      <CarsContext.Provider value={{cars, carAdd, carEdit}}>

      <main id="main-content">


        <Routes>

        <Route path="/logout" element={<Logout />} />

          <Route path="/create" element={<Create />} />
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={
            <Suspense fallback={<span>Loading....</span>}>
                                    <Register />
                                </Suspense> 
        
        } />
          <Route path="/catalog" element={<Catalog cars={cars}/>} />
          <Route path="/logout" element={<Home />} />
          <Route path="/cars/:carId/edit"  element={<EditCar />} />
          <Route path="/catalog/:carId" element={<CarDetails cars={cars} />} />



        </Routes>

      </main>
      </CarsContext.Provider>
      <Footer />
    </div>
    </AuthContext.Provider>

  );
}

export default App;
