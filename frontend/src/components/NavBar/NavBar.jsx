import React from "react";
import { useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
import AuthContext from "../../context/AuthContext";
import MenuItems from "../MenuItems/MenuItems";
import "./NavBar.css";

const Navbar = () => {
  const { logoutUser, user } = useContext(AuthContext);
  const navigate = useNavigate();
  return (
    <div className="navBar">
      <div>
        <ul className="ul">
          <li className="brand li">
            <Link
              to="/"
              title="Home"
              style={{ textDecoration: "none", color: "white" }}
            >
              <b>eManage</b>
            </Link>
          </li>
          <li className="li">
            <a href="">
              <img src="logo.png" alt="eManage logo" title="eManage"></img>
            </a>
          </li>
          <li className="button-center li">
            {user ? (
              <>
                <button onClick={() => navigate("/profile")}>Profile</button>
                <button className="btn-space" onClick={logoutUser}>
                  Logout
                </button>
              </>
            ) : (
              <>
                <button onClick={() => navigate("/login")}>Login</button>
                <button
                  className="btn-space"
                  onClick={() => navigate("/register")}
                >
                  Register
                </button>
              </>
            )}
          </li>
        </ul>
      </div>
      {user ? <MenuItems /> : <></>}
    </div>
  );
};

export default Navbar;
