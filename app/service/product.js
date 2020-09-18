'use strict';

const Service = require('egg').Service;

class ProductService extends Service {
  async findProducts(keyword) {
    const client = this.app.mysql;
    const sql = 'select id,name from product';
    if (!keyword) {
      return await client.query(sql);
    } else if (keyword) {
      return await client.query(`${sql} where name like ?`, [ `%${keyword}%` ]);
    }
  }
}

module.exports = ProductService;
