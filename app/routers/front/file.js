/**
 * 用户相关路由
 */
const router = new require('koa-router')()
const { getDownloadFiles } = require("../../controllers/file")


/**
 * @swagger
 * /front/file/list:
 *   get:
 *     tags:
 *       - file
 *     description: 获取资料文件列表
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
 *                    $ref: '#/definitions/file'
 *               message:
 *                 type: string
 */
router.get('/list', getDownloadFiles)

/**
 * @swagger
 * definitions:
 *   file:
 *     properties:
 *       id:
 *         type: string
 *         description: 文件id
 *       name:
 *         type: string 
 *         description: 文件名
 *       fileUrl:
 *         type: string
 *         description: 文件地址
 */
module.exports = router;