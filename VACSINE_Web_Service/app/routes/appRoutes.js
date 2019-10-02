'use strict';
module.exports = function (app) {
  var vacsine = require('../controller/appController');
  //console.log('2');
  // vacsine Routes
  app.route('/users')
    .get(vacsine.list_all_users)
    .post(vacsine.create_a_user);

  app.route('/users/:userId')
    .get(vacsine.read_a_user)
    .put(vacsine.update_a_user)
    .delete(vacsine.delete_a_user);

  app.route('/users/site/:siteId')
    .get(vacsine.read_site_users);

  app.route('/identified/:identifiedId')
    .put(vacsine.add_identified);
};