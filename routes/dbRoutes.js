const express = require('express');
const router = express.Router();


module.exports = (knex) => {
  router.get('/', (req,res) => {
    knex
      .select("*")
      .from("users")
      .then((results) => {
        res.json(results);
    })
  })

  router.post('/new', (req, res) => {
    console.log(req.body);
    knex('blogposts')
    .insert({
      title: req.body.title,
      body: req.body.body
    })
    .then(results => {
      res.redirect('/');
    })
  })
  return router;
}