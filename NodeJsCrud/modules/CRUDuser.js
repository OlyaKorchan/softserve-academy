const express = require('express');

const addUser = function addNewUser (req, res, next){
    const addedUser = req.body;
    addedUser.id = Math.floor(1000 + Math.random() * 9000).toString();
    res.render('newUser', {user: addedUser});
};

const editUser = function editUser  (req, res, next){
    const editedUser = req.body;
    res.render('newUser', {user: editedUser});
};

const removeUser = function removeUser (req, res, next){
    res.send(req.params.id);
};


module.exports = {
    addUser: addUser,
    editUser: editUser,
    removeUser: removeUser
};