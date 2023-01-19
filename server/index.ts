import express from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import { initDB, loginUser, registerUser } from "./utils/surrealdb";
import { checkKey } from "./utils/auth";

const cors = require("cors");

dotenv.config();
initDB();

const app = express();
const port = process.env.PORT || 7777;

app.use(bodyParser.json()); // * Parsing JSON data
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors()); // * Middleware for CORS errors

// * Get routes

app.get('/', (req, res) => {
  res.send('Express + TS server');
});

// * Post routes

app.post('/register', async (req, res) => {
  let showName = req.body.show;
  let email    = req.body.email;
  let username = req.body.user;
  let password = req.body.pass;

  const result = await registerUser(showName, username, password, email);

  res.send(result);
});

app.post('/login', async (req, res) => {
  let username = req.body.user;
  let password = req.body.pass;

  const result = await loginUser(username, password);

  res.send(result);
});

app.post('/auth', async (req, res) => {
  let token = req.body.tkn;

  const result = checkKey(token);

  res.send(result);
});

app.listen(port, () => {
  console.log("Server is running at http://localhost:" + port);
});