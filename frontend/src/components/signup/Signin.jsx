import React, { useState } from "react";
import axios from "axios";
import "./signup.css";
import Headingcomponent from "./Headingcomponent";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { authActions } from "../../store/index";

const Signin = () => {
  const dispatch = useDispatch();
  const history = useNavigate();
  const [Input, setInputs] = useState({
    email: "",
    password: "",
  });
  const change = (e) => {
    const { name, value } = e.target;
    setInputs({ ...Input, [name]: value });
  };
  const submit = async (e) => {
    e.preventDefault();

    await axios
      .post(`${window.location.origin}/api/auth/login`, Input)
      .then((response) => {
        if (response.data.message === "Login Successfully") {
          const userId = response.data.other._id;
          sessionStorage.setItem("id", userId); // store
          dispatch(authActions.login());
          alert(response.data.message);
          history("/todo");
        } else {
          alert(response.data.message);
          console.log("error");
        }
        setInputs({ email: "", password: "" });
      });
  };
  return (
    <div className="signin d-flex justify-content-center align-items-center">
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
                className="p-2 my-2 password"
                value={Input.password}
                type="password"
                name="password"
                placeholder="Enter Your Password"
                onChange={change}
              />
              <div className=" my-2 btn" onClick={submit}>
                Sign in
              </div>
            </div>
          </div>
          <div className="col-lg-4 d-none d-lg-block d-lg-flex justify-content-center align-items-center">
            <Headingcomponent first="Sign" second="In" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signin;
