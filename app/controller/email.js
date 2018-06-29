'use strict';

const Controller = require('egg').Controller;

class EmailController extends Controller {
	async getEmailLists () {
		const {ctx} = this;
		const user = await ctx.service.email.select(ctx.query.uname);
		ctx.body = {
			errorCode: 200,
			errorMsg: 'success',
			result: {
				user: user,
				length: user.length
			}
		};
	}

	async getEmail () {
		const {ctx} = this;
		const data = await ctx.service.email.get('/d/gitRep/egg-all/egg-api-email')
		ctx.body = {
			errorCode: 200,
			errorMsg: 'success',
			result: {
				email: data
			}
		};
	}
}

module.exports = EmailController;