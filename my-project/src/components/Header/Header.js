import { Link } from 'react-router-dom';
import { useContext } from 'react';

import { AuthContext } from '../../contexts/AuthContext';



const Header = () => {

  const { user } = useContext(AuthContext);

    return(<header>
      <nav>
        <section className="logo">
          <img src="./images/logo.png" alt="logo" />
        </section>
        <ul>

        {user.email && <span>{user.email}</span>}
          {/*Users and Guest*/}
          <li>
            <Link to="/">Home</Link>
          </li>

          <li>
          <Link to="/catalog">Sport cars</Link>
          </li>
          {user.email
          ? <>
           <li>
          <Link to="/create">Create</Link>
        </li>
        <li>
        <Link to="/logout">Logout</Link>
        </li>
        </>
          :
          <>
          <li>
          <Link to="/register">Register</Link>
          </li>
          <li>
          <Link to="/login">Login</Link>
          </li>
          
          </>
          }
          
        
          {/*Only Guest*/}
     
          {/*Only Users*/}
         
        </ul>
      </nav>
    </header>
    
    );
};

export default Header;
