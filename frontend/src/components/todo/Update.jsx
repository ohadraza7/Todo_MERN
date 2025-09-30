import axios from "axios";
import React, { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";

const Update = ({ display, update }) => {
  const [Inputs, setInputs] = useState({
    title: "",
    body: "",
  });

  // Sync Inputs with props when "update" changes
  useEffect(() => {
    if (update) {
      setInputs({
        title: update.title || "",
        body: update.body || "",
      });
    }
  }, [update]);

  const change = (e) => {
    const { name, value } = e.target;
    setInputs({ ...Inputs, [name]: value });
  };
  const submit = async () => {
    await axios
      .put(
        `${window.location.origin}/api/list/updatetask/${update._id}`,
        Inputs
      )
      .then((response) => {
        toast.success("Task Updated Successfully!");
      });
    display("none");
  };
  return (
    <div className="p-5 d-flex flex-column justify-content-center align-items-start update-todo-com w-100">
      <h1 className="my-3 ">Update Your Todo</h1>
      <input
        className="todo-input p-3 my-3"
        type="text"
        value={Inputs.title}
        onChange={change}
        name="title"
      />
      <textarea
        className="todo-input  my-3 p-3 border-1"
        type="text"
        name="body"
        id=""
        value={Inputs.body}
        onChange={change}
      ></textarea>
      <div className="update-button d-flex justify-content-between">
        <button
          className="my-4 btn btn bg-black"
          onClick={() => display("none")}
        >
          Close
        </button>
        <button className="mx-4 my-4 btn " onClick={submit}>
          Update Todo
        </button>
      </div>
    </div>
  );
};

export default Update;
