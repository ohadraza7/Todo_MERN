import "./Home.css";
import React from "react";

export const Home = () => {
  return (
    <div className="home d-flex justify-content-center align-items-center ">
      <div className="container d-flex flex-column justify-content-center align-items-center text-center">
        <h1 className="home-h1">
          Organize your tasks, life,
          <br />
          and day with ease
        </h1>
        <p>
          Simplify your workflow and boost your productivity <br />
          with our intuitive task management tools.
        </p>
        <button className="btn btn-primary">Make it happen</button>
      </div>
    </div>
  );
};
