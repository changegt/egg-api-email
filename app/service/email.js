'use strict';
const path = require('path');
const Service = require('egg').Service;

const {fileDisplay} = require('../utils/emailUtils.js');

class EmailService extends Service {
	async select (uname) {
		const user = await this.app.mysql.query('select * from i_users where uname = ?', uname);
		return user;
	}

	async get (path1) {
		var basepath = 'D:\\gitRep\\egg-all\\egg-api-email';
		var arr = await fileDisplay(path.join(path.resolve(basepath), '/Maildir/cur'));
		return arr;
	}
}

module.exports = EmailService;