/**
 * 整合所有子路由
 */

const router = new require('koa-router')()
const home = require('./home')
const user = require("./backend/user")
const product_front = require("./front/product")
const product_backend = require("./backend/product")
const message_front = require("./front/message")
const message_backend = require("./backend/message")
const news_front = require("./front/news")
const news_backend = require("./backend/news")
const file_front = require("./front/file")
const file_backend = require("./backend/file")
const swaggerJSDoc = require('swagger-jsdoc')
const pkg = require("../../package.json")
const swaggerDefinition = {
    info: {
        title: 'API',
        version: '1.0.0',
        description: 'API',
    },
    host: `localhost:${pkg.port}`,
    basePath: '/' // Base path (optional)
};
const options = {
    swaggerDefinition,
    apis: ['./app/routers/backend/*.js', './app/routers/front/*.js'], // 写有注解的router的存放地址
};
const swaggerSpec = swaggerJSDoc(options)
// 通过路由获取生成的注解文件
router.get('/swagger.json', async function (ctx) {
    ctx.set('Content-Type', 'application/json');
    ctx.body = swaggerSpec;
})

router.use('', home.routes())
router.use('/backend/user', user.routes())
router.use('/front/product', product_front.routes())
router.use('/backend/product', product_backend.routes())
router.use('/front/news', news_front.routes())
router.use('/backend/news', news_backend.routes())
router.use('/front/message', message_front.routes())
router.use('/backend/message', message_backend.routes())
router.use('/front/file', file_front.routes())
router.use('/backend/file', file_backend.routes())
module.exports = router