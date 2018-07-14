'use strict';

// const mysql_config = require('./config.mysql.js');

module.exports = appInfo => {
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1530156658025_2461';

  // add your config here
  config.middleware = [];

  config.jsonp = {
    whiteList: ['localhost'],
  };

  return config;
};
