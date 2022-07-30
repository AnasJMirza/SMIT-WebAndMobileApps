const express = require("express");

const router = express.Router();
const Joi = require("joi");


const courses = [
  { id: 1, name: "course1" },
  { id: 2, name: "course2" },
  { id: 3, name: "course3" },
  { id: 4, name: "course4" },
  { id: 5, name: "course5" },
];



router.get("/", (req, res) => {
  res.send(courses);
});

router.get("/", (req, res) => {
  res.send("Hello World!, I am a server, I am running on port " + port);
});

router.get("/:id", (req, res) => {
  const course = courses.find((c) => c.id == parseInt(req.params.id));
  if (!course) {
    res.status(404).send("Course with the given ID does not exist...");
  } else {
    res.send(course);
  }
});

router.post("/", (req, res) => {
  const { error } = validateCourse(req.body);

  if (error) {
    res.status(400).send(error.details[0].message);
  } else {
    const course = {
      id: courses.length + 1,
      name: req.body.name,
    };
    courses.push(course);
    res.send(course);
  }
});

router.put("/:id", (req, res) => {
  // see if the course exist or not

  const course = courses.find((item) => item.id == parseInt(req.params.id));
  if (!course) {
    res.status(404).send("Course with the given ID does not exist...");
    return;
  }

  // validate the input request

  const { error } = validateCourse(req.body);
  if (error) {
    res.status(400).send(error.message);
    return;
  }

  // update the course

  course.name = req.body.name;
  res.send(course);
});

router.delete("/:id", (req, res) => {
  const course = courses.find((item) => item.id === parseInt(req.params.id));
  if (!course) {
    return res.status(404).send("Course with this ID does not exist..");
  }

  const index = courses.indexOf(course);
  courses.splice(index, 1);
  res.send(course);
});

const validateCourse = (course) => {
    const schema = Joi.object({
        name: Joi.string().min(3).max(30).required(),
    })

    return schema.validate(course)
};


module.exports = router;
