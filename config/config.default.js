'use strict';

// const mysql_config = require('./config.mysql.js');

module.exports = appInfo => {
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1530156658025_2461';

  // add your config here
  config.middleware = [];

  config.mysql = {
  	client:{
		host: '39.106.56.103',
		port: 3306,
		user: 'yyf',
		password: 'gt_yyfyyf',
		database: 'ewomail',
	},
  	app: true,
  	agent: false
  };

  return config;
};
