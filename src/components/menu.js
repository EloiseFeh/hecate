import * as React from "react";
import { Link } from "react-router-dom";
import "../style/menu.css";
import NewspaperIcon from "@mui/icons-material/Newspaper";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";

export default function Menu() {
  return (
    <div className="menu">
      <ul className="menu-nav">
        <li className="nav-item">
          <Link to="/" className="nav-link">
            <NewspaperIcon />
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/mapa" className="nav-link">
            <LocationOnOutlinedIcon />
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/perfil" className="nav-link">
            <PersonOutlineOutlinedIcon />
          </Link>
        </li>
      </ul>
    </div>
  );
}
