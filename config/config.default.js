/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = (exports = {});

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1600430113857_4719';
  // set dotenv
  require('dotenv').config();
  // add your middleware config here
  config.middleware = [];
  //  add Database setup
  config.mysql = {
    client: {
      host: process.env.MYSQL_HOST,
      port: process.env.MYSQL_PORT,
      user: process.env.MYSQL_USER,
      password: process.env.MYSQL_PASS,
      database: process.env.MYSQL_DATA,
    },
  };
  config.mssql = {
    client: {
      server: process.env.MSSQL_HOST,
      port: process.env.MSSQL_PORT,
      user: process.env.MSSQL_USER,
      password: process.env.MSSQL_PASS,
      database: process.env.MSSQL_DATA,
    },
  };
  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };

  return {
    ...config,
    ...userConfig,
  };
};
