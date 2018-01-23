const express = require('express');

const addUser = function addNewUser (req, res, next){
    const newUser = req.body;
    newUser.id = Math.floor(1000 + Math.random() * 9000).toString();
    res.render('newUser', {user: newUser});
};

const removeUser = function removeUser (req, res, next){
    res.send(req.body.id);
};

const editUser = function editUser (req, res, next){
    const editedUser = req.body;
    res.render('newUser', {user: editedUser});
};

module.exports = {
    addUser: addUser,
    removeUser: removeUser,
    editUser: editUser
};