import * as React from 'react';
import { Link } from "react-router-dom";
import '../style/menu.css';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import PersonIcon from '@mui/icons-material/Person';
import LocationOnIcon from '@mui/icons-material/LocationOn';

export default function Menu() {

  return (
    <div className='navbar'>
      <ul className='navbar-nav'>
        <li className='nav-item'>
          <NewspaperIcon/>
          <Link to="/" className='nav-link'>Home</Link>
        </li>
        <li className='nav-item'>
          <LocationOnIcon/>
          <Link to="/mapa" className='nav-link'>Mapa</Link>
        </li>
        <li className='nav-item'>
          <PersonIcon/>
          <Link to="/perfil" className='nav-link'>Perfil</Link>
        </li>
      </ul>

    </div>
  );
}
