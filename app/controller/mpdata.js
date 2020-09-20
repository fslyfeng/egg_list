'use strict';

const Controller = require('egg').Controller;

class MpdataController extends Controller {
  async listMpdatas() {
    const { ctx, service } = this;
    const keyword = ctx.query.keyword;
    const mpdata = await service.mpdata.findMpdatas(keyword);
    ctx.body = mpdata;
  }
}

module.exports = MpdataController;
