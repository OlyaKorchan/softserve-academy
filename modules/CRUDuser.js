const express = require('express');

const addUser = function addNewUser (req, res, next){
    const newUser = req.body;
    newUser.id = Math.floor(1000 + Math.random() * 9000).toString();
    res.render('newUser', {user: newUser});
};

const removeUser = function removeUser (req, res, next){
    const deletedUserId = req.body.deleted_user;
    res.send(deletedUserId);
};

const editUser = function editUser  (req, res, next){
    res.render('newUser', {user: req.body});
};

module.exports = {
    addUser: addUser,
    editUser: editUser,
    removeUser: removeUser
};