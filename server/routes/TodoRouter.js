const express = require("express");
const router = express.Router();
const Todo = require("../models/todoModel");

// GET ALL
router.get("/", async (req, res) => {
  try {
    const todo = await Todo.find();
    res.json(todo);
  } catch (err) {
    res.status(404).res.json({ Message: err });
  }
});

//CREATE
router.post("/create", async (req, res) => {
  const todo = new Todo({
    title: req.body.title,
    task: req.body.task,
  });
  try {
    const newTodo = await todo.save();
    res.json(newTodo);
  } catch (err) {
    res.json({ Message: err });
  }
});

// GET BY ID
router.get("/:id", async (req, res) => {
  try {
    const singlePost = await Todo.findById(req.params.id);
    res.json(singlePost);
  } catch (err) {
    res.json({ Message: err });
  }
});

// REMOVE
router.delete("/delete/:id", async (req, res) => {
  try {
    const removePost = await Todo.deleteOne({ _id: req.params.id });
    res.json(removePost);
  } catch (err) {
    res.json({ Message: err });
  }
});

// Update
router.put("/update/:id", async (req, res) => {
  try {
    const updatePost = await Todo.updateOne(
      { _id: req.params.id },
      { $set: { title: req.body.title, task: req.body.task } }
    );
    res.json(updatePost);
  } catch (err) {
    res.json({ Message: err });
  }
});

module.exports = router;
