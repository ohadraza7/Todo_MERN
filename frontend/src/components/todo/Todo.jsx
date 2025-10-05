import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import "./todo.css";
import TodoCards from "./Todocards";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Update from "./Update";
import axios from "axios";

let id = sessionStorage.getItem("id");
let toBeUpdateArray = [];

const Todo = () => {
  const [Array, setArray] = useState([]);
  const [Inputs, setInputs] = useState({
    title: "",
    body: "",
  });

  const del = async (cardId) => {
    if (id) {
      await axios
        .delete(`${window.location.origin}/api/list/deletetask/${cardId}`, {
          data: { id: id },
        })
        .then((response) => {
          toast.success("Task Deleted Successfully!");
          setArray((prev) => prev.filter((item) => item._id !== cardId));
        });
    } else {
      toast.error("Please Sign Up First");
    }
  };

  const dis = (value) => {
    document.querySelector(".update-todo").style.display = value;
  };

  const Change = (e) => {
    const { name, value } = e.target;
    setInputs({ ...Inputs, [name]: value });
  };

  const update = (value) => {
    toBeUpdateArray = Array[value];
  };

  const Submit = async () => {
    if (id) {
      if (Inputs.title === "" || Inputs.body === "") {
        toast.error("Please fill in all fields");
      } else {
        alert("yes");
        await axios
          .post(`${window.location.origin}/api/list/addtask`, {
            title: Inputs.title,
            body: Inputs.body,
            id: id,
          })
          .then((response) => {
            setArray([...Array, response.data]);

            toast.success("Todo Added Successfully");
            setInputs({ title: "", body: "" });
            document.getElementById("body").style.display = "none";
          });
      }
    }
  };

  useEffect(() => {
    if (id) {
      const fetch = async () => {
        await axios
          .get(`${window.location.origin}/api/list/gettask/${id}`)
          .then((response) => {
            setArray(response.data.list);
          });
      };
      fetch();
    } else {
      toast.error("Please Sign Up First");
    }
  }, [Submit]);

  return (
    <div>
      <div className="todo">
        <ToastContainer />
        <div className="main-todo container d-flex flex-column justify-content-center align-items-center my-4">
          <div className="p-1 col-12 col-lg-6 container-todo d-flex flex-column">
            <input
              className="p-2  input-title"
              type="text"
              name="title"
              placeholder="TITLE"
              value={Inputs.title}
              onClick={() => {
                document.getElementById("body").style.display = "block";
              }}
              onChange={Change}
            />
            <textarea
              value={Inputs.body}
              className="p-2  body"
              name="body"
              id="body"
              placeholder="BODY"
              onChange={Change}
              type="text"
            ></textarea>
          </div>
          <div className="d-flex justify-content-end col-12 col-lg-6">
            <button className="my-3 btn " onClick={Submit}>
              Add Todo
            </button>
          </div>
        </div>
        <div className="todo-body">
          <div className="container-fluid">
            <div className="row ">
              {Array &&
                Array.map((item, index) => (
                  <div
                    key={index}
                    className="col-12 col-sm-6  col-md-4 col-lg-4  p-4"
                  >
                    <TodoCards
                      title={item.title}
                      body={item.body}
                      id={item._id}
                      delid={del}
                      display={dis}
                      updateId={index}
                      toBeUpdate={update}
                      update={toBeUpdateArray}
                    />
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
      <div className="update-todo ">
        <div className="container">
          <Update display={dis} update={toBeUpdateArray} />
        </div>
      </div>
    </div>
  );
};

export default Todo;
