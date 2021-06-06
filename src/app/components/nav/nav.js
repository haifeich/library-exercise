import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav>
      <h1>
        <Link to="/">ti&m Library</Link>
      </h1>
      <ul className="linkscontainer">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/add">Add</Link>
        </li>
        <li>
          <Link to="/records">Records</Link>
        </li>
      </ul>
      <div className="buttoncontainer">
        <button className="button">SIGN IN</button>
      </div>
    </nav>
  );
};

export default Nav;
