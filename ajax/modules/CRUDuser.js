const express = require('express');

const addUser = function addNewUser (req, res, next){
    const newUser = req.body;
    newUser.id = Math.floor(1000 + Math.random() * 9000).toString();
    res.send(JSON.stringify(newUser));
};

const removeUser = function removeUser (userObject){
    const removedUser = {
        id: userObject.id
    }
    return JSON.stringify(removedUser);
};

const editUser = function editUser  (userObject){
    delete userObject.method
    return JSON.stringify(userObject);
};

module.exports = {
    addUser: addUser
};