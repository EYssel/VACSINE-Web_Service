'use strict';
module.exports = function(app) {
  var todoList = require('../controller/appController');

  // todoList Routes
  app.route('/users')
    .get(todoList.list_all_users)
    .post(todoList.create_a_user);
   
  app.route('/users/:userId')
    .get(todoList.read_a_user)
    .put(todoList.update_a_user)
    .delete(todoList.delete_a_user);
  
  app.route('/persons')
    .get(todoList.list_all_persons)
    .post(todoList.create_a_person)

  app.route('/persons/:personId')
    .put(todoList.update_a_person)
    .delete(todoList.delete_a_person)

  app.route('/user-sites/:userId')
    .get(todoList.read_user_sites)

  app.route('/sites')
    .get(todoList.read_sites)
  
  app.route('/status/:siteId')
    .put(todoList.update_status)
    .get(todoList.get_status)
  app.route('/allow-entry/:siteId')
    .put(todoList.allow_entry)
  app.route('/disallow-entry/:siteId')
    .put(todoList.disallow_entry)
  app.route('/capture/:siteId')
    .put(todoList.capture_person)

  app.route('/upload-photo/:siteId')
    .put(todoList.upload_photo)

  app.route('/upload-person-photo/:personId')
    .put(todoList.upload_person_photo)

  app.route('/new-person')
    .get(todoList.read_new_person)
};