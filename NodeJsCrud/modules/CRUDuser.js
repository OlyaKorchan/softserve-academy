const express = require('express');

const addUser = function addNewUser (req, res, next){
    let newUser = req.body;
    newUser.id = Math.floor(1000 + Math.random() * 9000);
    res.render('newUser', {user: newUser});
}

const removeUser = function removeUser (req, res, next){
    const removedUser = {
        id: req.body.response_delete
    }
    res.send(JSON.stringify(removedUser));
}

const editUser = function editUser  (req, res, next){
    
};
module.exports = {addUser: addUser,
                  removeUser: removeUser,
                  editUser: editUser}