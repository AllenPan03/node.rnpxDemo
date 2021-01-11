const { GetUser, InsertUser } = require("../models/user")
const { renderData } = require("../../config/render")
const jwt = require('jsonwebtoken');
/**
 * 获取产品信息
 * @return 产品信息对象
 */
export async function login(ctx) {
    const data = ctx.request.body;
    if (!data.name || !data.password) {
        renderData(ctx, null, 102, '参数不合法');
    }
    const result = await GetUser({
        name: data.userName,
        password: data.password
    })
    if (result !== null) {
        const token = jwt.sign({
            name: result.name,
            password: result.password
        }, 'polo_token', { expiresIn: '2h' });
        const userData = {
            userName: result.name,
            token: 'Bearer ' + token
        }
        renderData(ctx, userData, 0, '登录成功');
    } else {
        renderData(ctx, null, 101, '用户名或密码错误');
    }
}

/**
 * 获取用户信息
 * @return 用户信息对象
 */
export async function getUser(ctx) {
    if (ctx.request.header.authorization) {
        try {
            const token = ctx.request.header.authorization;
            const data = jwt.verify(token.split('Bearer ')[1], 'polo_token');
            renderData(ctx, { userName: data.name }, 0)
        } catch (err) {
            renderData(ctx, null, 401, err.message);
        }
    } else {
        renderData(ctx, null, 401, '无访问权限！');
    }
}

/**
 * 添加用户
 * - name // 用户名
 * - email // 邮箱
 * - mobile // 手机号
 */
// export async function addUser(ctx) {
//     const { name, mobile, email } = ctx.request.body;
//     try {
//         const result = await InsertUser({ name, mobile, email });
//         renderData(ctx, {
//             taskId: result.insertId
//         }, 0, "添加成功")
//     } catch (error) {
//         console.log(error)
//         renderData(ctx, null, 102, "添加失败：" + error.sqlMessage)
//     }
// }
