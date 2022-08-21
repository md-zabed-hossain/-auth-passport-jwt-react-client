import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Button from "../component/Button";
import Form from "../component/Form";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  // useEffect(() => {
  //   const token = localStorage.getItem("token");
  //   axios
  //     .get("http://localhost:5000/profile", {
  //       headers: {
  //         Authorization: token,
  //       },
  //     })
  //     .then((response) => navigate("/profile"))
  //     .catch((err) => {
  //       navigate("/login");
  //     });

  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, []);

  const handleUserName = (e) => {
    setUsername(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };
  const handleLoginUser = () => {
    axios
      .post("http://localhost:5000/login", {
        username: username,
        password: password,
      })
      .then((user) => {
        // console.log(response);
        // const token = user.data.token;
        localStorage.setItem("token", user.data.token);
        alert(`Welcome ${username} your are ${user.data.message} `);
        setUsername("");
        setPassword("");
        navigate("/profile");
      })
      .catch((err, response) => {
        // console.log(err.response.data);
        alert(err.response.data);
        setUsername("");
        setPassword("");
        navigate("/login");
      });
  };

  return (
    <div>    
      <h2>User Login Page</h2>
      <Form
        name="username"
        type="text"
        placeholder="User name"
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
      {/* <input
        name="username"
        type="text"
        placeholder="User name"
        value={username}
        onChange={(e) => handleUserName(e)}
      />
      <input
        name="password"
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => handlePassword(e)}
      /> */}

      <Button
        className={"btn"}
        text={"Login"}
        type="submit"
        onClick={handleLoginUser}
      ></Button>

      {/* <button type="submit" onClick={handleLoginUser}>
        Login
      </button> */}
    </div>
  );
};

export default Login;
