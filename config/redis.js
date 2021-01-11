const redis = require("redis")
// 如何启动Redis，常用命令：redis-server
const { promisify } = require('util')

export const client = redis.createClient(6379, '127.0.0.1')

client.auth('password');  // 如果没有设置密码 是不需要这一步的

export const getAsync = promisify(client.get).bind(client);