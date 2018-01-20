const express = require('express');
const fs = require('fs');
const router = express.Router();

const renderHomePage = require('../modules/renderHomePage');
const renderUsersData = require('../modules/renderUsersData');
const userData = require('../modules/CRUDuser');

router.get('/', renderHomePage);
router.get('/users', renderUsersData); 
router.post('/users/add', userData.addUser);
router.post('/users/delete', userData.removeUser);

module.exports = router;