import React, { useState, useEffect } from "react";
import axios from "axios";

const Update = (props) => {
  const [state, setState] = useState({
    title: "",
    task: "",
  });

  const { id } = props.match.params;
  const { title, task } = state;

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API}/${id}`)
      .then((res) => {
        const { task, title } = res.data;
        setState({ ...state, title, task });
      })
      .catch((err) => alert(err));
  }, []);

  const changeHandler = (name) => (e) => {
    setState({ ...state, [name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .put(`${process.env.REACT_APP_API}/update/${id}`, { title, task })
      .then((res) => {
        const { title, task } = res.data;
        setState({ ...state, title, task });
        alert("Task Updated!");
        props.history.push("/");
      })
      .catch((err) => {
        alert(err.response.data.error);
      });
  };

  const showUpdateForm = () => (
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
      <button className="btn btn-primary w-100">Update!</button>
    </form>
  );

  return (
    <div className="container pt-5 pb-5">
      <h1 className="text-center">Update Task</h1>
      <hr></hr>
      {showUpdateForm()}
    </div>
  );
};

export default Update;
