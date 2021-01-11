const Sequelize = require('sequelize');
const { env } = require("./config");
let config = {};
switch (env) {
    case "dev":
        config = {
            database: 'rnpxDemo', // 使用哪个数据库
            username: 'root', // 用户名
            password: '123456', // 口令
            host: '127.0.01', // 主机名
            port: 3306 // 端口号，MySQL默认3306
        };
        break;
    case "test":
        config = {
            database: 'rnpxDemo', // 使用哪个数据库
            username: 'rnpxDemo', // 用户名
            password: 'Jinlin@123', // 口令
            host: 'rnpxDemo.mysql.rds.aliyuncs.com', // 主机名
            port: 3306 // 端口号，MySQL默认3306
        };
        break;
    case "prd":
        config = {
            database: 'rnpxDemo', // 使用哪个数据库
            username: 'rnpxDemo', // 用户名
            password: 'rnpxDemo123', // 口令
            host: 'rnpxDemo.mysql.rds.aliyuncs.com', // 主机名
            port: 3306 // 端口号，MySQL默认3306
        };
        break;
}

export const sequelize = new Sequelize(config.database, config.username, config.password, {
    host: config.host,
    dialect: 'mysql',
    pool: {
        max: 5,
        min: 0,
        idle: 30000
    }
});
