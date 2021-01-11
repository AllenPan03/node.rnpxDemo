/**
 * 用户相关路由
 */
const router = new require('koa-router')()
const { msgSubmit } = require("../../controllers/message")

/**
 * @swagger
 * /front/message/submit:
 *   post:
 *     tags:
 *       - message
 *     description: 提交留言
 *     produces:
 *       - application/json
 *     parameters:
 *        $ref: '#/definitions/message'
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
 *               message:
 *                 type: string
 */
router.post('/submit', msgSubmit);
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