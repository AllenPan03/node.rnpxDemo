const mysql = require("mysql")
const { debug } = require("./config")
const mysqlConfig = debug ? {
    host: '127.0.01',   // 数据库地址
    user: 'root',    // 数据库用户
    password: '123456',   // 数据库密码
    database: 'rnpxDemo'  // 选中数据库
} : {
        host: 'panjunlin.mysql.rds.aliyuncs.com',   // 数据库地址
        user: 'panjunlin',    // 数据库用户
        password: 'Jinlin@123',   // 数据库密码
        database: 'rnpxDemo'  // 选中数据库
    }
// 创建数据池
const pool = mysql.createPool(mysqlConfig)

/**
 * 执行
 * @param {*} sql 语句
 * @param {*} values 转译参数值
 * @example query("SELECT * FROM TEST WHERE ID>=1") // [{ID:1},{ID:2},{ID:3},{ID:4}]
 * @example query("SELECT * FROM TEST WHERE ID>=?",["2"]) // [{ID:2},{ID:3},{ID:4}]
 */
function query(sql, values) {
    return new Promise((resolve, reject) => {
        pool.getConnection(function (err, connection) {
            if (err) {
                reject(err)
            } else {
                connection.query(sql, values, (err, rows) => {
                    if (err) {
                        reject(err)
                    } else {
                        resolve(rows)
                    }
                    connection.release()
                })
            }
        })
    })
}

module.exports = {
    query,
    pool
}