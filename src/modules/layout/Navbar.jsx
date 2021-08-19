import React from "react";
import { Link } from "react-router-dom";
let Navbar = (props) => {
  return (
    <React.Fragment>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <Link className="navbar-brand" to="/">
          CartZone
        </Link>
        <div class="container-fluid">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/mobiles">
                Mobile
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/watches">
                Watches
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/laptops">
                Laptops
              </Link>
            </li>
          </ul>
          <ul className="navbar-nav ml-auto">
            <li className="nav-item  acitve">
              <Link to="/upload" className="nav-link">
                Upload Product
              </Link>
            </li>
          </ul>
          <ul className="navbar-nav ml-auto">
            <li className="nav-item  acitve">
              {
                !props.auth ?
                <Link to="/login" className="nav-link">
                Login
              </Link>
              : <button className="btn btn-danger"onClick={()=>props.logoutHandler()}>logout</button>
              }
            </li>
            <li className="nav-item">
              <Link to="/signup" className="nav-link">
                Sign Up
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/cart" className="nav-link">
                Cart
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/checkout" className="nav-link">
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </React.Fragment>
  );
};
export default Navbar;