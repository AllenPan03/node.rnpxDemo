/**
 * 用户相关路由
 */
const router = new require('koa-router')()
const { uploadFile, getFiles, deleteFile, addFile } = require("../../controllers/file")
/**
 * @swagger
 * /backend/file/upload:
 *   post:
 *     tags:
 *       - file
 *     description: 上传文件
 *     produces:
 *       - multipart/form-data
 *     parameters:
 *       - name: file
 *         description: file文件
 *         required: true
 *         type: binary
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
 *               message:
 *                 type: string
 */
router.post('/upload', uploadFile);

/**
 * @swagger
 * /backend/file/list:
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
router.get('/list', getFiles)
/**
 * @swagger
 * /backend/file/delete:
 *   post:
 *     tags:
 *       - file
 *     description: 删除资料文件
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: id
 *         description: 资料文件ID
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
 *               message:
 *                 type: string
 */
router.post('/delete', deleteFile);
/**
 * @swagger
 * /backend/file/add:
 *   post:
 *     tags:
 *       - file
 *     description: 新增资料文件
 *     produces:
 *       - application/json
 *     parameters:
 *        $ref: '#/definitions/file'
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
router.post('/add', addFile);
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