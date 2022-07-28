// Basic configurations

const express = require("express");
const Joi = require("joi");
const app = express();
const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`App is listening on port ${port}`));

// Basic Middleware

app.use(express.json());

// Database

const Database = [
  {
    id: 1,
    genre: "Action",
  },
  {
    id: 2,
    genre: "Romance",
  },
  {
    id: 3,
    genre: "Horror",
  },
];

// RESTFull API's

// GET requests

app.get("/api/genre", (req, res) => {
  res.send(Database);
});

app.get("/api/genre/:id", (req, res) => {
  const genre = Database.find(
    (element) => element.id === parseInt(req.params.id)
  );
  if (!genre)
    return res.status(404).send("Genre with this id does not exist...");
  res.send(genre);
});

// POST requests

app.post("/api/genre", (req, res) => {
  const { error } = validateGenre(req.body);
  if (error) return res.status(400).send(error.message);
  const genre = {
    id: Database.length + 1,
    genre: req.body.genre,
  };
  Database.push(genre);
  res.send(genre);
});

// PUT requests

app.put("/api/genre/:id", (req, res) => {
  let genre = Database.find((item) => item.id === parseInt(req.params.id));
  if (!genre)
    return res.status(404).send("Genre with this ID does not exist...");

  const { error } = validateGenre(req.body);
  if (error) return res.status(400).send(error.message);

  genre.genre = req.body.genre;
  res.send(genre);
});

// DELETE requests

app.delete("/api/genre/:id", (req, res) => {
  const genre = Database.find((item) => item.id === parseInt(req.params.id));
  if (!genre)
    return res.status(404).send("Genre with this ID does not exist...");

  const index = Database.indexOf(genre);
  Database.splice(index, 1);
  res.send(genre);
});

// ValidateFunction

const validateGenre = (genre) => {
  const schema = Joi.object({
    genre: Joi.string().min(4).max(10).required(),
  });

  return schema.validate(genre);
};
