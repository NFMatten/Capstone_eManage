import React from "react";
import { useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
import AuthContext from "../../context/AuthContext";
import "./NavBar.css";

const Navbar = () => {
  const { logoutUser, user } = useContext(AuthContext);
  const navigate = useNavigate();
  return (
    <div className="navBar">
      <ul>
        <li className="brand">
          <Link to="/" style={{ textDecoration: "none", color: "white" }}>
            <b>eManage</b>
          </Link>
        </li>
        <li>
          <img src="logo.png" alt="eManage logo" title="eManage"></img>
        </li>
        <li className="button-center">
          {user ? (
            <button onClick={logoutUser}>Logout</button>
          ) : (
            <button onClick={() => navigate("/login")}>Login</button>
          )}
          {user ? (
            <button onclick={logoutUser}>Logout</button>
          ) : (
            <button className="register" onClick={() => navigate("/register")}>
              Register
            </button>
          )}
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
