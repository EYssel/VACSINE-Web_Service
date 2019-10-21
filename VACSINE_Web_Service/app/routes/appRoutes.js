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

  app.route('/status/:siteId')
    .put(todoList.update_status)
    .get(todoList.get_status)
  app.route('/allow-entry/:siteId')
    .put(todoList.allow_entry)
  app.route('/disallow-entry/:siteId')
    .put(todoList.disallow_entry)
  app.route('/capture/:siteId')
    .put(todoList.capture_person)
};