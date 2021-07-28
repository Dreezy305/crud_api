const express = require("express");
const joi = require("joi");
const app = express();

app.use(express.json());

app.listen(5000, () => {
  console.log(`Server is running on port 5000.`);
});

const books = [
  { title: "Harry Potter", id: 1 },
  { title: "Twilight", id: 2 },
  { title: "Lorien Legacies", id: 3 },
];

// READ REQUEST HANDLERS
app.get("/", (req, res) => {
  res.send("This is my CRUD api");
});

app.get("/api/books", (req, res) => {
  res.send(books);
});
