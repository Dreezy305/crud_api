const express = require("express");
const joi = require("joi");
const app = express();

app.use(express.json());

const books = [
  { title: "Harry Potter", id: 1 },
  { title: "Twilight", id: 2 },
  { title: "Lorien Legacies", id: 3 },
];

// READ REQUEST HANDLERS
