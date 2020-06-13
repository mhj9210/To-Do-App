import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const App = () => {
  const [tasks, setTasks] = useState([]);

  const fetchTasks = () => {
    axios
      .get(`${process.env.REACT_APP_API}`)
      .then((res) => {
        setTasks(res.data);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  const deleteConfirm = (id) => {
    let confirm = window.confirm("Are you sure you want to delete this post?");
    if (confirm) {
      deletePost(id);
    }
  };

  const deletePost = (id) => {
    axios
      .delete(`${process.env.REACT_APP_API}/delete/${id}`)
      .then((res) => fetchTasks())
      .catch((err) => alert(err));
  };

  return (
    <div className="container pt-5 pb-5">
      <h1 style={{ fontFamily: "Bellota, cursive" }}>To Do App</h1>
      <Link to="/create">Add New Task</Link>
      <hr />
      {tasks.map((task) => (
        <div
          className="row"
          key={task._id}
          style={{ borderBottom: "1px solid silver" }}
        >
          <div className="col pt-3 pb-2">
            <div className="row">
              <div className="col-md-10">
                <Link to={`/${task._id}`} style={{ fontSize: "40px" }}>
                  {task.title}
                </Link>
                <p style={{ fontSize: "20px" }}>{task.task.substring(0, 30)}</p>
                <p className="badge badge-success">
                  {task.date.substring(0, 10)}
                </p>
              </div>
              <div className="col-md-2">
                <Link
                  to={`/update/${task._id}`}
                  className="btn btn-warning mr-1"
                >
                  Update
                </Link>
                <button
                  className="btn btn-danger"
                  onClick={() => deleteConfirm(task._id)}
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default App;
