/**
 * 用户相关路由
 */
const router = new require('koa-router')()
const { getNews, getNewsList, addNews, updateNews, deleteNews } = require("../../controllers/news")
/**
 * @swagger
 * /backend/news/detail:
 *   get:
 *     tags:
 *       - news
 *     description: 获取新闻详情
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: id
 *         description: 新闻ID
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
 *                 $ref: '#/definitions/news'
 *               message:
 *                 type: string
 */
router.get('/detail', getNews);
/**
 * @swagger
 * /backend/news/list:
 *   get:
 *     tags:
 *       - news
 *     description: 获取新闻列表
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
 *                    $ref: '#/definitions/news'
 *               message:
 *                 type: string
 */
router.get('/list', getNewsList)
/**
 * @swagger
 * /backend/news/delete:
 *   post:
 *     tags:
 *       - news
 *     description: 删除新闻信息
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: id
 *         description: 新闻ID
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
router.post('/delete', deleteNews);
/**
 * @swagger
 * /backend/news/add:
 *   post:
 *     tags:
 *       - news
 *     description: 新增新闻信息
 *     produces:
 *       - application/json
 *     parameters:
 *        $ref: '#/definitions/news'
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
router.post('/add', addNews);
/**
 * @swagger
 * /backend/news/update:
 *   post:
 *     tags:
 *       - news
 *     description: 新增新闻信息
 *     produces:
 *       - application/json
 *     parameters:
 *        $ref: '#/definitions/news'
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
router.post('/update', updateNews);
/**
 * @swagger
 * definitions:
 *   news:
 *     properties:
 *       title:
 *         type: string 
 *         description: 新闻标题
 *       id:
 *         type: string
 *         description: 新闻ID
 *       info:
 *         type: string
 *         description: 新闻内容
 *       imgUrl:
 *         type: string
 *         description: 新闻主图
 *       createTime:
 *         type: string
 *         description: 新闻创建时间
 */
module.exports = router;