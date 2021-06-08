import React from "react";

const Navbar = ({ createCounter, totalCount }) => {
  return (
    <nav className="navbar navbar-dark bg-dark">
      <a className="navbar-brand" href=" ">
        Navbar{" "}
      </a>
      <button className="btn btn-primary">
        Total Items
        <span className="badge badge-light">{totalCount}</span>
      </button>
      <button onClick={createCounter} className="btn btn-info">
        Create
      </button>
    </nav>
  );
};

export default Navbar;
