'user strict';
var sql = require('../db.js');

//User object constructor
var User = function (user) {
    //this.user = user.user;
    this.name = user.name;
  
    this.email = user.email;
    this.password = user.password;
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

User.createPerson = function (name, surname, user_id, site_id, result) {
    sql.query("INSERT INTO person(name, surname, user_id, site_id) VALUES (?, ?, ?, ?)", [name, surname, user_id, site_id], function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(err, null);
        }
        else {
            console.log("Person inserted");
        }
    });
};

User.updatePerson = function (personId, name, surname, user_id, site_id, result) {
    sql.query("UPDATE person SET name = ?, surname = ?, user_id = ?, site_id = ?  WHERE person_id = ?", [name, surname, user_id, site_id, personId], function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(null, err);
        }
        else {
            result(null, res);
        }
    });
};

User.getUserById = function (user_id, result) {
    sql.query("Select * from user where user_id = ? ", user_id, function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(err, null);
        }
        else {
            result(null, res);

        }
    });
};

User.getAllPersons = function (person_id, result) {
    sql.query("SELECT * FROM person WHERE person_id = ?", person_id, function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(err, null);
        }
        else {
            result(null, res)
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

User.deletePerson = function (person_id, result) {
    sql.query("DELETE FROM person WHERE person_id = ?", person_id, function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(null, err);
        }
        else {

            result(null, res);
        }
    })
}

User.getAllPersons = function (result) {
    sql.query("SELECT * FROM person", function (err, res) {

        if (err) {
            console.log("error: ", err);
            result(null, err);
        }
        else {
            console.log('persons: ', res);

            result(null, res);
        }
    });
};

User.readNewPerson = function (result) {
    sql.query("SELECT * FROM person ORDER BY person_id DESC LIMIT 0, 1", function (err, res) {

        if (err) {
            console.log("error: ", err)
        }
        else {
            console.log('newest person: ', res)
            result(null, res);
        }
    })
}

User.readUserSites = function (user_id, result) {
    sql.query("SELECT user_id, site_id FROM user_sites WHERE user_id = ?", user_id, function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(null, err);
        }
        else {
            console.log('user sites : ', res)
            result(null, res);
        }
    });
};

User.readSites = function (result) {
    sql.query("SELECT * FROM site", function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(null, err);
        }
        else {
            console.log('sites : ', res);
            result(null, res);
        }
    })
}

User.updateStatus = function (siteId, personId, result) {
    console.log('PersonId = ' + personId)
    console.log('SiteId = ' + siteId)
    sql.query("UPDATE status SET person_identified = ? WHERE site_id = ?", [personId, siteId], function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(null, err);
        }
        else {
            result(null, res);
        }
    });
};

User.getStatus = function (siteId, result) {
    sql.query("SELECT * FROM status WHERE site_id = ?", siteId, function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(err, null);
        }
        else {
            result(null, res);
        }
    })
};

User.allowEntry = function (siteId, result) {
    //console.log('PersonId = ' + personId)
    console.log('SiteId = ' + siteId)
    sql.query("UPDATE status SET allow_entry = 1 WHERE site_id = ?", siteId, function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(null, err);
        }
        else {
            result(null, res);
        }
    });
};

User.disallowEntry = function (siteId, result) {
    //console.log('PersonId = ' + personId)
    console.log('SiteId = ' + siteId)
    sql.query("UPDATE status SET allow_entry = 0 WHERE site_id = ?", siteId, function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(null, err);
        }
        else {
            result(null, res);
        }
    });
};

User.capturePerson = function (siteId, personId, result) {
    console.log('PersonId = ' + personId)
    console.log('SiteId = ' + siteId)
    sql.query("UPDATE status SET capture_person = ? WHERE site_id = ?", [personId, siteId], function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(null, err);
        }
        else {
            result(null, res);
        }
    });
};

User.uploadPhoto = function (siteId, photo_url, result) {
    console.log('Site ID: ' + siteId)
    console.log('Photo URL: '+ photo_url)
    sql.query("UPDATE status SET photo_url = ? WHERE site_id = ?", [photo_url, siteId], function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(null, err);
        }
        else {
            console.log('Photo URL Updated')
            result(null, res);
        }
    })
}

User.uploadPersonPhoto = function (personId, photo_url, result) {
    console.log('Person ID: ' + personId)
    console.log('Photo URL: '+ photo_url)
    sql.query("UPDATE person SET photo_url = ? WHERE person_id = ?", [photo_url, personId], function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(null, err);
        }
        else {
            console.log('Photo URL Updated')
            result(null, res);
        }
    });
}




module.exports = User;