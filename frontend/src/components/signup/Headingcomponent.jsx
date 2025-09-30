import React from "react";

const Headingcomponent = ({ first, second }) => {
  return (
    <div>
      {" "}
      <h1 className="text-center heading-h1">
        <strong>
          {first} <br />
          {second}
        </strong>
      </h1>
    </div>
  );
};

export default Headingcomponent;
