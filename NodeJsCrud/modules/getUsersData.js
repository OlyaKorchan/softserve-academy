const fs = require("fs");
const path = require("path");

// const usersList = JSON.parse(fs.readFileSync(__dirname + '/../data/users.json', 'utf8'));

const usersData = function readUsersData(storeData){
    fs.readFile(__dirname + '/../data/users.json', 'utf8', (error, data) => {
        if (error) throw error;
        storeData(JSON.parse(data));
    });
}

module.exports = usersData;
