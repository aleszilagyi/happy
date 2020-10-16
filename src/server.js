const express = require("express");
const app = express();
const port = 3000;
const path = require("path");
const pages = require("./pages");

app
  .use(express.urlencoded({ extended: true }))
  .use(express.static("public"))

  .set("views", path.join(__dirname, "views"))
  .set("view engine", "hbs")

  .get("/", pages.index)
  .get("/orphanage", pages.orphanage)
  .get("/orphanages", pages.orphanages)
  .get("/create-orphanage", pages.createOrphanage)
  .post("/save-orphanage", pages.saveOrphanage);

app.listen(port, () => console.log(`Happy app listening on port ${port}!`));
