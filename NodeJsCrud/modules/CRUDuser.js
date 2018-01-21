const express = require('express');

const addUser = function addNewUser (userObject){
    userObject.id = Math.floor(1000 + Math.random() * 9000).toString();
    delete userObject.method;
    return JSON.stringify(userObject);
    // res.render('newUser', {user: newUser});
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

const postRequestHandler = function postRequestHandler(req, res, next){
    const reqUser = req.body;
    switch(reqUser.method){
        case 'post': res.send(addUser(reqUser));
        break;

        case 'delete': res.send(removeUser(reqUser));
        break;

        case 'put': res.send(editUser(reqUser));
        break;
    }
}

module.exports = postRequestHandler;