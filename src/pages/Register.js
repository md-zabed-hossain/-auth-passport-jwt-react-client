import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Button from "../component/Button";
import Form from "../component/Form";

const Register = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleUserName = (e) => {
    setUsername(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };
  const handleSaveUser = () => {
    axios
      .post("https://auth-passport-jwt-react.herokuapp.com/register", {
        username: username,
        password: password,
      })
      .then((response) => {
        // console.log(response)
        alert(`New User ${response.data.user.username} Cerated`);
        setUsername("");
        setPassword("");
        navigate("/login");
      })
      .catch((err, response) => {
        // console.log(err.response.data);
        alert(err.response.data);
        setUsername("");
        setPassword("");
      });
  };

  return (
    <div>
      <h2>User Register Page</h2>
      <Form
        name="username"
        type={"text"}
        placeholder={"User name"}
        value={username}
        onChange={(e) => handleUserName(e)}
      />

      <Form
        name="password"
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => handlePassword(e)}
      />
      {/* <div>    
      
        <input
          name="username"
          type="text"
          placeholder="User name"
          value={username}
          onChange={(e) => handleUserName(e)}
        />
      </div> */}
      <br />
      {/* <div>
        <input
          name="password"
          type="text"
          placeholder="Password"
          value={password}
          onChange={(e) => handlePassword(e)}
        />
      </div> */}
      <br />
      <br />
      <Button
        className={"btn btn-reg"}
        text={"Register"}
        type="submit"
        onClick={handleSaveUser}
      ></Button>
      {/* <button type="submit" onClick={handleSaveUser}>
        Register
      </button> */}
    </div>
  );
};

export default Register;
