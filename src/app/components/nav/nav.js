import React from "react";

const Nav = () => {
  return (
    <nav>
      <h1>ti&m Library</h1>
      <ul className="linkscontainer">
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/">About</a>
        </li>
      </ul>
      <div className="buttoncontainer">
        <button className="button">SIGN IN</button>
      </div>
    </nav>
  );
};

export default Nav;
