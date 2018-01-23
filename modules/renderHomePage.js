const express = require('express');
const path = require('path');

const renderHomePage = function render (req, res, next) {
    res.sendFile(path.join(__dirname, '../views', '/index.html'));
  }
module.exports = renderHomePage;