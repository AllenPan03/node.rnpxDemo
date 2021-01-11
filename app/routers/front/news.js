/**
 * 用户相关路由
 */
const router = new require('koa-router')()
const { getNews, getNewsList } = require("../../controllers/news")
/**
 * @swagger
 * /front/news/detail:
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
 * /front/news/list:
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