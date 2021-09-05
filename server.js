const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
require("dotenv").config();

const port = process.env.PORT || 5000;

const storeRouter = require("./app/routes/store.route");
const bookRouter = require("./app/routes/book.route");

app.use(cors());

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

app.use("/api/v1/store", storeRouter);
app.use("/api/v1/book", bookRouter);

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
