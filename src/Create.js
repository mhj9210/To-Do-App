import React, { useState } from "react";
import axios from "axios";

const Create = (props) => {
  const [state, setState] = useState({
    title: "",
    task: "",
  });
  const { title, task } = state;

  const changeHandler = (name) => (e) => {
    setState({ ...state, [name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(`${process.env.REACT_APP_API}/create`, { title, task })
      .then((res) => {
        setState({ ...state, title: "", task: "" });
        alert("Task Created!");
        props.history.push("/");
      })
      .catch((err) => {
        alert(err.response.data.error);
      });
  };

  return (
    <div className="container p-5">
      <h1 style={{ textAlign: "center" }}>Create Task</h1>
      <br />

      <form className="m-auto" style={{ width: "50%" }} onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Title</label>
          <input
            value={title}
            type="text"
            className="form-control"
            required
            onChange={changeHandler("title")}
          />
        </div>
        <div className="form-group">
          <label>Task</label>
          <textarea
            value={task}
            type="text"
            className="form-control"
            required
            onChange={changeHandler("task")}
          />
        </div>
        <button className="btn btn-primary w-100">Add New Task!</button>
      </form>
    </div>
  );
};

export default Create;
