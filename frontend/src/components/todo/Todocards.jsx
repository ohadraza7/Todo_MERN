import React from "react";
import { MdDelete } from "react-icons/md";
import { GrDocumentUpdate } from "react-icons/gr";

const Todocards = ({
  title,
  body,
  id,
  delid,
  display,
  updateId,
  toBeUpdate,
}) => {
  return (
    <div className="todo-card p-3 ">
      <div>
        <h5>
          <strong>{title}</strong>
        </h5>
        <p>{(body || "").substring(0, 70)}...</p>
      </div>
      <div className="d-flex justify-content-around ">
        <div
          className="update card-icon d-flex justify-items-center align-items-center"
          onClick={() => {
            display("block");
            // console.log(updateId);
            toBeUpdate(updateId);
          }}
        >
          <GrDocumentUpdate className="" /> Update
        </div>
        <div
          className="card-icon del text-danger d-flex justify-items-center align-items-center"
          onClick={() => {
            delid(id);
          }}
        >
          <MdDelete className=" danger" />
          <div>Delete</div>
        </div>
      </div>
    </div>
  );
};

export default Todocards;
