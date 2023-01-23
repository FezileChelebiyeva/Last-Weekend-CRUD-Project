const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const app = express();

app.use(cors());
app.use(bodyParser.json());
dotenv.config();

const { Schema } = mongoose;
const courseSchema = new Schema(
  {
    image: String,
    name: String,
    title: String,
    description: String,
    count: Number,
    price: Number,
    expertImg: String,
    expertName: String,
    expertTitle: String,
  },
  { timestamps: true }
);

const Courses = mongoose.model("courses", courseSchema);

app.get("/courses", (req, res) => {
  Courses.find({}, (err, docs) => {
    if (!err) {
      res.send(docs);
    } else {
      res.status(500).json({ message: err });
    }
  });
});

app.get("/courses/:id", (req, res) => {
  const { id } = req.params;
  Courses.findById(id, (err, doc) => {
    if (!err) {
      if (doc) {
        res.send(doc);
      } else {
        res.status(404).json({ message: "data not found" });
      }
    } else {
      res.status(500).json({ message: err });
    }
  });
});

app.post("/courses", (req, res) => {
  let course = new Courses({
    image: req.body.image,
    name: req.body.name,
    title: req.body.title,
    description: req.body.description,
    count: req.body.count,
    price: req.body.price,
  });
  course.save();
  res.send({ message: "Course Added" });
});

app.delete("/courses/:id", (req, res) => {
  const { id } = req.params;
  Courses.findByIdAndDelete(id, (err, doc) => {
    if (!err) {
      res.status(200).json({ message: "Course Deleted" });
    } else {
      res.status(404).json({ message: err });
    }
  });
});

const PORT = process.env.PORT;
const DB = process.env.DB_URL.replace("<password>", process.env.PASSWORD);

mongoose.connect(DB, (err) => {
  if (!err) {
    app.listen(PORT, () => {
      console.log(`http://localhost:${PORT}/courses`);
    });
  }
});
