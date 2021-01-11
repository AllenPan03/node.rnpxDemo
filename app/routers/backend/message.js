/**
 * 用户相关路由
 */
const router = new require('koa-router')()
const { getMsgList } = require("../../controllers/message")
/**
 * @swagger
 * /backend/message/list:
 *   get:
 *     tags:
 *       - message
 *     description: 获取留言列表
 *     produces:
 *       - application/json
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
 *                 type: array
 *                 items: 
 *                    $ref: '#/definitions/message'
 *               message:
 *                 type: string
 */
router.get('/list', getMsgList)
/**
 * @swagger
 * definitions:
 *   message:
 *     properties:
 *       name:
 *         type: string 
 *         description: 姓名
 *       tel:
 *         type: string
 *         description: 电话
 *       email:
 *         type: string
 *         description: 电子邮箱
 *       content:
 *         type: string
 *         description: 留言内容
 */
module.exports = router;