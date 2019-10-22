'use strict';

var User = require('../model/appModel.js');

exports.list_all_users = function (req, res) {
  User.getAllUser(function (err, user) {

    console.log('controller')
    if (err)
      res.send(err);
    console.log('res', user);
    res.send(user);
  });
};



exports.create_a_user = function (req, res) {
  var new_user = new User(req.body);
  User.createUser(new_user, function (err, user) {

    if (err)
      res.send(err);
    res.json(user);
  });
};

exports.create_a_person = function (req, res) {
  User.createPerson(req.body.name, req.body.surname, req.body.user_id, req.body.site_id, function (err, user) {
    if (err)
      res.send(err);
    res.json(user)
  });
};


exports.read_a_user = function (req, res) {
  User.getUserById(req.params.userId, function (err, user) {
    if (err)
      res.send(err);
    res.json(user);
  });
};

exports.read_user_sites = function (req, res) {
  User.readUserSites(req.params.userId, function (err, user) {
    if (err)
      res.send(err);
    res.json(user);
  });
};

exports.read_new_person = function (req, res) {
  User.readNewPerson(function (err, user) {
    if(err)
      res.send(err);
    res.json(user);
  })
}


exports.update_a_user = function (req, res) {
  User.updateById(req.params.userId, new User(req.body), function (err, user) {
    if (err)
      res.send(err);
    res.json(user);
  });
};

exports.update_a_person = function (req, res) {
  User.updatePerson(req.params.personId, req.body.name, req.body.surname, req.body.user_id, req.body.site_id, function (err, user) {
    if (err)
      res.send(err);
    res.json(user);
  })
}

exports.delete_a_user = function (req, res) {
  User.remove(req.params.userId, function (err, user) {
    if (err)
      res.send(err);
    res.json({ message: 'User successfully deleted' });
  });
};

exports.delete_a_person = function (req, res) {
  User.deletePerson(req.params.personId, function (err, user) {
    if (err)
      res.send(err);
    res.json({ message: 'Person successfully deleted' });
  });
};

exports.list_all_persons = function (req, res) {
  User.getAllPersons(function (err, user) {

    console.log('controller')
    if (err)
      res.send(err);
    console.log('res', user);
    res.send(user);
  });
};

exports.update_status = function (req, res) {
  User.updateStatus(req.params.siteId, req.body.person_identified, function (err, user) {
    if (err)
      res.send(err);
    res.json(user)
  });
};

exports.get_status = function (req, res) {
  User.getStatus(req.params.siteId, function (err, user) {
    if (err)
      res.send(err);
    res.json(user);
  });
};

exports.get_a_person = function (req, res) {
  User.getAllPersons(req.params.personId, function (err, user) {
    if(err)
      res.send(err);
    res.json(user)
  });
};

exports.allow_entry = function (req, res) {
  User.allowEntry(req.params.siteId, function (err, user) {
    if (err)
      res.send(err);
    res.json(user)
  });
};

exports.disallow_entry = function (req, res) {
  User.disallowEntry(req.params.siteId, function (err, user) {
    if (err)
      res.send(err);
    res.json(user)
  });
};

exports.capture_person = function (req, res) {
  User.capturePerson(req.params.siteId, req.body.capture_person, function (err, user) {
    if (err)
      res.send(err);
    res.json(user)
  });
};

exports.upload_photo = function (req, res) {
  User.uploadPhoto(req.params.siteId, req.body.photo_url, function (err, user) {
    if (err)
      res.send(err);
    res.json(user)
  });
};

exports.upload_person_photo = function (req, res) {
  User.uploadPersonPhoto(req.params.personId, req.body.photo_url, function (err, user) {
    if (err)
      res.send(err);
    res.json(user)
  });
};

exports.read_sites = function (req, res) {
  User.readSites(function (err, user) {
    if (err)
      res.send(err);
    res.json(user)
  });
};

