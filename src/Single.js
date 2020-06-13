import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Single = (props) => {
  const [task, setTask] = useState([]);

  const fetchSingle = () => {
    axios
      .get(`${process.env.REACT_APP_API}/${props.match.params.id}`)
      .then((res) => setTask(res.data))
      .catch((err) => alert(err));
  };

  useEffect(() => {
    fetchSingle();
  });

  return (
    <div className="container pt-5 pb-5">
      <h1>{task.title}</h1>
      <p className="lead">{task.task}</p>
      <br />
      <Link to="/">Go Back</Link>
    </div>
  );
};

export default Single;
