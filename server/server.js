const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv").config();
const TodoRouter = require("./routes/TodoRouter");

// middleware
app.use(cors());
app.use(bodyParser.json());

// routes
app.use("/api", TodoRouter);

// connections
mongoose
  .connect(process.env.DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })
  .then(() => console.log("Connected to DB"))
  .catch((err) => console.log(err));

const port = process.env.PORT || 8000;
app.listen(port, () => console.log("port:8000 connected"));
