import React, { useState } from "react";
import axios from "axios";
import "./Register.css";

function Register() {
  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
  });

  const updateUser = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const registerForm = async () => {
    try {
      const response = await axios.post("http://localhost:8080/register", user);
      console.log("message : ", response.data);
    } catch (err) {
      console.log("Error occurred while calling register : ", err);
    }
  };

  //   const registerForm = () => {
  //     console.log(user);
  //     axios
  //       .post("http://localhost:8080/register", user)
  //       .then((response) => {
  //         console.log("message : ", response.data.message);
  //       })
  //       .catch((error) => {
  //         console.log("Error : ", error);
  //       });
  //   };

  return (
    <div>
      <div className="container">
        <h2>Register</h2>
        <p>Please fill in this form to create an account.</p>
        <hr />
        <label htmlFor="username">
          <b>Username</b>
        </label>
        <input
          type="text"
          placeholder="Enter Username"
          name="username"
          id="username"
          value={user.username}
          onChange={updateUser}
        />

        <label htmlFor="email">
          <b>Email</b>
        </label>
        <input
          type="text"
          placeholder="Enter Email"
          name="email"
          id="email"
          value={user.email}
          onChange={updateUser}
        />

        <label htmlFor="psw">
          <b>Password</b>
        </label>
        <input
          type="password"
          placeholder="Enter Password"
          name="password"
          id="password"
          value={user.password}
          onChange={updateUser}
        />

        <hr />
        <p>
          By creating an account you agree to our <a>Terms & Privacy</a>.
        </p>

        <button type="submit" className="primary-btn" onClick={registerForm}>
          Register
        </button>
      </div>

      <div className="container signin">
        <p>
          Already have an account? <a>Sign in</a>.
        </p>
      </div>
    </div>
  );
}

export default Register;
