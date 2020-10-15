const express = require("express");
const app = express();
const port = 3000;
const path = require("path");
const pages = require("./pages");

app
  .use(express.static("public"))

  .set("views", path.join(__dirname, "views"))
  .set("view engine", "hbs")

  .get("/", pages.index)
  .get("/orphanage", pages.orphanage)
  .get("/orphanages", pages.orphanages)
  .get("/create-orphanage", pages.createOrphanage);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
