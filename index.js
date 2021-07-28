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

app.get("/api/books/:id", (req, res) => {
  const book = books.find((c) => c.id === parseInt(req.params.id));
  if (!book)
    res
      .status(404)
      .send(
        '<h2 style="font-family: Malgun Gothic; color: darkred;">Ooops... Cant find what you are looking for!</h2>'
      );
  res.send(book);
});

// CREATE REQUEST HANDLER
app.post("/api/books", (req, res) => {
  const { error } = req.body;
  if (error) {
    res
      .status(404)
      .send(
        '<h2 style="font-family: Malgun Gothic; color: darkred;">Ooops... Cant find what you are looking for!</h2>'
      );
  } else {
    const book = {
      id: books.length + 1,
      title: req.body.title,
    };
    books.push(book);
    res.send(book);
  }
});

// UPDATE REQUEST HANDLERS
app.put("/api/books/:id", (req, res) => {
  const book = books.find((c) => c.id === parseInt(req.params.id));
  if (!book) {
    res
      .status(404)
      .send(
        '<h2 style="font-family: Malgun Gothic; color: darkred;">Ooops... Cant find what you are looking for!</h2>'
      );
  }

  const { error } = validateBook(req.body); //validate book is a function that checks fo whether the book is present or not
  if (error) {
    res.status(400).send(error.details[0].message);
    return;
  }
  book.title = req.body.title;
  res.send(book);
});

// DELETE REQUEST HANDLER
app.delete("/api/books/:id", (req, res) => {
  const book = books.find((c) => c.id === parseInt(req.params.id));
  if (!book) {
    res
      .status(404)
      .send(
        '<h2 style="font-family: Malgun Gothic; color: darkred;">Ooops... Cant find what you are looking for!</h2>'
      );
  }

  const Index = books.indexOf(book);
  books.splice(Index, 1);

  res.send(book);
});
