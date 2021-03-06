"use strict";

require('dotenv').config();

const PORT        = process.env.PORT || 8080;
const ENV         = process.env.ENV || "development";
const express     = require("express");
const bodyParser  = require("body-parser");
const sass        = require("node-sass-middleware");
const app         = express();

const knexConfig  = require("./knexfile");
const knex        = require("knex")(knexConfig[ENV]);
const knexLogger  = require('knex-logger');

// Seperated Routes for each Resource
const dbRoutes = require("./routes/dbRoutes.js");

// Log knex SQL queries to STDOUT as well
app.use(knexLogger(knex));

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/styles", sass({
  src: __dirname + "/sass",
  dest: __dirname + "/public/styles",
  debug: true,
  outputStyle: 'expanded'
}));
app.use(express.static("public"));

// Mount all resource routes
app.use("/api/", dbRoutes(knex));

// Home page
app.get("/", (req, res) => {
  knex
  .select('*')
  .from('blogposts')
  .then(results => {
    console.log('results from db', results);
    let templateVars = { entries: []};
    results.forEach((item,index) => {
      let key = `entry${index}`
      templateVars.entries.unshift(
        {
          id: item.id,
          title: item.title,
          body: item.body
        }
      )
    })
    console.log('templateVars', templateVars.entries)
    res.render("index", templateVars);
  })
});

app.listen(PORT, () => {
  console.log("Example app listening on port " + PORT);
});
