# Coding Bull Interview

This is a 1.5 hour project (starting at commit 2055229) to make an mini-blog app for The Coding Bull.

* As a user I want to be able to make a blog Post
* As a user I should see a list of posts in descending order

#### How to run:

  1. Create a postgres Database
  2. Change .env.example to .env, and change values to match the db
  3. If you don't have knex installed, install it with ``npm install knex -g``
  4. ``knex migrate:latest``
  5. ``npm install``
  6. ``npm start``
