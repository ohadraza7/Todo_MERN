import React, { useState } from "react";
import "./signup.css";
import Headingcomponent from "./Headingcomponent";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const history = useNavigate();
  const [Input, setInputs] = useState({
    email: "",
    username: "",
    password: "",
  });
  const change = (e) => {
    const { name, value } = e.target;
    setInputs({ ...Input, [name]: value });
  };
  const submit = async (e) => {
    e.preventDefault();

    await axios
      .post(`${window.location.origin}/api/auth/register`, Input)
      .then((response) => {
        if (response.data.message === "User Signup Successfully") {
          alert(response.data.message);
          history("/signin");
        } else {
          alert(response.data.message);
          setInputs({ email: "", username: "", password: "" });
        }
      });
  };

  return (
    <div className="signup d-flex justify-content-center align-items-center ">
      <div className="container ">
        <div className="row">
          <div className="col-lg-8 d-flex justify-content-center align-items-center flex-direction-column">
            <div className="d-flex flex-column w-100 p-5">
              <input
                className="p-2 my-2 email"
                value={Input.email}
                type="email"
                name="email"
                placeholder="Enter Your Email"
                onChange={change}
              />
              <input
                className="p-2 my-2 username"
                type="text"
                value={Input.username}
                name="username"
                placeholder="Enter Your Username"
                onChange={change}
              />
              <input
                className="p-2 my-2 password"
                type="password"
                value={Input.password}
                name="password"
                onChange={change}
                placeholder="Enter Your Password"
              />
              <div className=" my-2 btn" onClick={submit}>
                Sign Up
              </div>
            </div>
          </div>
          <div className=" col-lg-4 d-none d-lg-block d-lg-flex justify-content-center align-items-center">
            <Headingcomponent first="Sign" second="Up" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
