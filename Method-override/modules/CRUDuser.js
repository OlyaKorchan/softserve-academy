const express = require('express');

const addUser = function addNewUser (req, res, next){
    const newUser = req.body;
    newUser.id = Math.floor(1000 + Math.random() * 9000).toString();
    res.send(JSON.stringify(newUser));
};

const removeUser = function removeUser (req, res, next){
    const removedId = req.body;
    const removedUser = {
        id: removedId.id
    }
    res.send(JSON.stringify(removedUser));
};

const editUser = function editUser (req, res, next){
    const editedUser = req.body;
    res.send(JSON.stringify(editedUser));
};

module.exports = {
    addUser: addUser,
    removeUser: removeUser,
    editUser: editUser
};