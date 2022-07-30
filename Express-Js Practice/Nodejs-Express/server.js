const Joi = require("joi");
const logger = require("./logger");
const express = require("express");
const app = express();

const port = process.env.PORT || 3000;

// course DATA BAse

const courses = [
  { id: 1, name: "course1" },
  { id: 2, name: "course2" },
  { id: 3, name: "course3" },
];

// Middle ware

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(logger);

// Environment practice

console.log(app.get('env'));
console.log(process.env.NODE_ENV);

// Restful APIS

app.get("/", (req, res) => {
  res.send("Hello World!, I am a server, I am running on port " + port);
});

app.get("/courses", (req, res) => {
  res.send(courses);
});

app.get("/courses/:id", (req, res) => {
  const course = courses.find(c => c.id == parseInt(req.params.id));
  if(!course){
    res.status(404).send("Course with the given ID does not exist...")
  }else{
    res.send(course)
  }
});

app.post("/courses", (req, res) => {
  

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

app.put('/courses/:id', (req, res) => {

    // see if the course exist or not

    const course = courses.find(item => item.id == parseInt(req.params.id))
    if (!course) {
        res.status(404).send("Course with the given ID does not exist...")
        return;
    }

    // validate the input request

    const { error } = validateCourse(req.body);
    if (error) {
        res.status(400).send(error.message);
        return;
    }

    // update the course

    course.name = req.body.name
    res.send(course);
    
});

app.delete('/courses/:id', (req, res) => {
    const course = courses.find(item => item.id === parseInt(req.params.id));
    if (!course) {
        return res.status(404).send("Course with this ID does not exist..")
    }

    const index = courses.indexOf(course);
    courses.splice(index, 1);
    res.send(course)
});



app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});




const validateCourse = (course) => {
    const schema = Joi.object({
        name: Joi.string().min(3).max(30).required(),
    })

    return schema.validate(course)
}
