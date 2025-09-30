import React from "react";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import { Home } from "./components/home/Home";
import Footer from "./components/footer/Footer";
import About from "./components/about/About";
import Todo from "./components/todo/Todo";
import Signin from "./components/signup/Signin";
import Signup from "./components/signup/Signup";
import Signout from "./components/signout/Signout";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { authActions } from "../src/store";

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const id = sessionStorage.getItem("id");
    if (id) {
      dispatch(authActions.login());
    } else if (!id) {
      dispatch(authActions.logout());
    }
  }, []);

  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/todo" element={<Todo />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/signout" element={<Signout />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
