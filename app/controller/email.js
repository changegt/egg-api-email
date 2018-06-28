'use strict';

const Controller = require('egg').Controller;

class EmailController extends Controller {
	async getEmailLists () {
		const {ctx, service} = this;
		ctx.body = {
			errorCode: 200,
			errorMsg: 'success',
			result: 'hi'
		};
	}
}

module.exports = EmailController;