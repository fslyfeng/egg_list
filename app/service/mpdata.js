'use strict';

const Service = require('egg').Service;

class MpdataService extends Service {
  async findMpdatas(keyword) {
    const client = this.app.mssql;
    const sql = 'select id,spmc,sj from spxx';
    if (!keyword) {
      return await client.query(sql);
    } else if (keyword) {
      return await client.query(`${sql} where spmc like '%${keyword}%'`);
    }
  }
}

module.exports = MpdataService;
