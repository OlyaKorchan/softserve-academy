const express = require('express');
const fs = require('fs');
const router = express.Router();

// const users = require('../modules/getUsersData');

/* GET users listing. */
router.get('/', function(req, res, next) {

  fs.readFile(__dirname + '/../data/users.json', 'utf8', (error, data) => {
  if (error) throw error;
  res.render('users', {users: JSON.parse(data)});
});
});
module.exports = router;