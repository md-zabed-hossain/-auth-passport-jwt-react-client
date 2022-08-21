import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Button from "../component/Button";

const Header = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  const logOut = () => {
    localStorage.removeItem("token");
    navigate("/");
  };
  return (
    <nav>
      {!token ? (
        <>
          <Link to="/">Home </Link>
          <Link to="/register">Register</Link>
          <Link to="/login">Login</Link>
        </>
      ) : (
        <>
          <Link to="/">Home </Link>
          <Link to="/profile">Profile </Link>
          <Button
            className={"btn"}
            text={"Log Out"}
            type="submit"
            onClick={logOut}
          ></Button>
          {/* <button onClick={()=>{logOut()}}>Logout</button> */}
        </>
      )}
    </nav>
  );
};

export default Header;
