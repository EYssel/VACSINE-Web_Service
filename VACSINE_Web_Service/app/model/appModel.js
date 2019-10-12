'user strict';
var sql = require('../db.js');

//User object constructor
var User = function (user) {
    //this.user = user.user;
    this.user_name = user.user_name;
    this.password = user.password;
    this.email = user.email;
};

User.createUser = function (newUser, result) {
    sql.query("INSERT INTO user set ?", newUser, function (err, res) {

        if (err) {
            console.log("error: ", err);
            result(err, null);
        }
        else {
            console.log(res.insertId);
            result(null, res.insertId);
        }
    });
};
User.getUserById = function (user_id, result) {
    sql.query("SELECT * FROM user WHERE user_id = ? ", user_id, function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(err, null);
        }
        else {
            result(null, res);

        }
    });
};

User.getUsersForSite = function (site_id, result) {
    sql.query("SELECT user_id FROM site WHERE site_id = ? ", site_id, function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(err, null);
        }
        else {
            result(null, res);
        }
    });
};

User.setUserIdentified = function (identifiedId, jsonBody, result) {
    console.log(identifiedId)
    console.log(JSON.stringify(userId))
    sql.query("UPDATE identified_person SET user_id = ?, is_owner = ? WHERE identified_id = ?", [jsonBody.user_id, jsonBody.is_owner, identifiedId], function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(err, null)
        }
        else {
            result(null, res);
        }
    });
};
User.getAllUser = function (result) {
    sql.query("Select * from user", function (err, res) {

        if (err) {
            console.log("error: ", err);
            result(null, err);
        }
        else {
            console.log('users : ', res);
            result(null, res);
        }
    });
};
User.updateById = function (id, user, result) {
    sql.query("UPDATE user SET user = ? WHERE id = ?", [user.user, id], function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(null, err);
        }
        else {
            result(null, res);
        }
    });
};
User.remove = function (id, result) {
    sql.query("DELETE FROM user WHERE user_id = ?", [id], function (err, res) {

        if (err) {
            console.log("error: ", err);
            result(null, err);
        }
        else {

            result(null, res);
        }
    });
};

module.exports = User;