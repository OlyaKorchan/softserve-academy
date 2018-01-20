const express = require('express');
const fs = require('fs');
const router = express.Router();

const renderHomePage = require('../modules/renderHomePage');
const renderUsersData = require('../modules/renderUsersData');

router.get('/', renderHomePage);
router.get('/users', renderUsersData); 

module.exports = router;