'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  const jsonp = app.jsonp({callback: 'callback'});
  router.get('/', controller.home.index);
  // router.get('/email/getEmailLists',jsonp, controller.email.getEmailLists);
  router.get('/email/getEmailLists', controller.email.getEmailLists);
  // router.get('/email/getEmail',jsonp, controller.email.getEmail);
  router.get('/email/getEmail', controller.email.getEmail);
};
