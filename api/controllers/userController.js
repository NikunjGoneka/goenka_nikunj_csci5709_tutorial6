const userData = require('../model/userModel');

const searchUser = (key, value) => {
    const match = userData.find(userData => {
        return userData[key] === value;
    })
    if (!match) {
        throw new Error("No User Found");
    }
    return match;
}
const addUser = (key, userObject) => {
    const match = userData.find(userData => {
        return userData[key] === userObject[key];
    })
    if (match) {
        throw new Error("uuid is not unique");
    }
    userData.push(userObject);
}

const updateUser = (username, newUsername) => {

    userData.forEach((ele, index) => {
        if (ele['username'] == username) {
            ele['username'] = newUsername;

        }
    });

}

module.exports.searchUser = searchUser;
module.exports.addUser = addUser;
module.exports.updateUser = updateUser;