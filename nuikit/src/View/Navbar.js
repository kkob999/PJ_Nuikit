import React from "react";
import { Link } from "react-router-dom";
import Flow from "../Flow";
import "../View/home.css";

function Navbar() {
  return (
    <div className="nav">
      <div className="nav-contain">
        <h1 className="logo-font">Nuikit Tracking</h1>
        <h4>Beta</h4>
        <p>Menu</p>
        <ul>
          <li>
            <Link to="/Dashboard">Dashboard</Link>
          </li>
        </ul>

        <p>View Board</p>
        <ul>
          <li>
            <Link to="/">Term</Link>
          </li>
          <li>
            <Link to="/Nuikit">Nuikit</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
export default Navbar;
