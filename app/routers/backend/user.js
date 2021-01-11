/**
 * 用户相关路由
 */
const router = new require('koa-router')()
const { getUser, addUser, login } = require("../../controllers/user")
/**
 * @swagger
 * /backend/user/login:
 *   post:
 *     tags:
 *       - user
 *     description: 后台登录
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: name
 *         description: 登录名称
 *         required: true
 *         type: string
 *         default: 1
 *       - name: password
 *         description: 登录密码
 *         required: true
 *         type: string
 *         default: 1234
 *     responses:
 *       200:
 *         description: Successfully created
 *         schema:
 *           type: object
 *           required:
 *               - username
 *           properties:
 *               code:
 *                 type: integer
 *               data:
 *                 type: string
 *               message:
 *                 type: string
 */
router.post('/login', login)
/**
 * @swagger
 * /backend/user/getUser:
 *   get:
 *     tags:
 *       - user
 *     description: 查询用户详情
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: id
 *         description: 用户ID
 *         required: true
 *         type: integer
 *         default: 1
 *     responses:
 *       200:
 *         description: Successfully created
 *         schema:
 *           type: object
 *           required:
 *               - username
 *           properties:
 *               code:
 *                 type: integer
 *               data:
 *                 type: object
 *                 $ref: '#/definitions/user'
 *               message:
 *                 type: string
 */
router.get('/getUser', getUser)
// router.post('/addUser', addUser)

/**
 * @swagger
 * definitions:
 *   user:
 *     properties:
 *       name:
 *         type: string 
 *         description: 用户名
 *       id:
 *         type: integer
 *         description: 用户ID
 */
module.exports = router