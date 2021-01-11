/**
 * 用户相关路由
 */
const router = new require('koa-router')()
const { getPro, getProList, deletePro, addPro, updatePro } = require("../../controllers/product")
/**
 * @swagger
 * /backend/product/getPro:
 *   get:
 *     tags:
 *       - product
 *     description: 获取产品详情
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: id
 *         description: 产品ID
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
 *                 $ref: '#/definitions/product'
 *               message:
 *                 type: string
 */
router.get('/getPro', getPro);
/**
 * @swagger
 * /backend/product/list:
 *   get:
 *     tags:
 *       - product
 *     description: 获取产品列表
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: seriesType
 *         description: 产品系列（1-ECOSAN,2-LERO,3-KAL）
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
 *                 type: array
 *                 items: 
 *                    $ref: '#/definitions/product'
 *               message:
 *                 type: string
 */
router.get('/list', getProList)
/**
 * @swagger
 * /backend/product/delete:
 *   post:
 *     tags:
 *       - product
 *     description: 删除产品信息
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: id
 *         description: 产品ID
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
router.post('/delete', deletePro);
/**
 * @swagger
 * /backend/product/add:
 *   post:
 *     tags:
 *       - product
 *     description: 新增产品信息
 *     produces:
 *       - application/json
 *     parameters:
 *        $ref: '#/definitions/product'
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
router.post('/add', addPro);
/**
 * @swagger
 * /backend/product/update:
 *   post:
 *     tags:
 *       - product
 *     description: 新增产品信息
 *     produces:
 *       - application/json
 *     parameters:
 *        $ref: '#/definitions/product'
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
router.post('/update', updatePro);
/**
 * @swagger
 * definitions:
 *   product:
 *     properties:
 *       name:
 *         type: string 
 *         description: 产品名
 *       bannerUrl:
 *         type: string
 *         description: banner地址
 *       seriesDesc:
 *         type: string
 *         description: 系列描述
 *       seriesType:
 *         type: string
 *         description: 系列类型
 *       specification:
 *         type: string
 *         description: 规格
 *       size:
 *         type: string
 *         description: 常规尺寸
 *       material:
 *         type: string
 *         description: 原料
 *       color:
 *         type: string
 *         description: 颜色
 *       field:
 *         type: string
 *         description: 应用领域
 *       brief:
 *         type: string
 *         description: 产品简介
 *       advantage:
 *         type: string
 *         description: 产品优势与特点
 *       imgUrls:
 *         type: string
 *         description: 产品图
 *       firstUrl:
 *         type: string
 *         description: 产品主图
 *       detailUrls:
 *         type: string
 *         description: 产品详情图
 */
module.exports = router;