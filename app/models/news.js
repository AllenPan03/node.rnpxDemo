const { sequelize } = require("../../config/db")
const Sequelize = require('sequelize');
const News = sequelize.define('POLO_NEWS', {
    id: {
        type: Sequelize.BIGINT,
        primaryKey: true
    },
    title: Sequelize.STRING(100),
    imgUrl: Sequelize.STRING(100),
    showTime: Sequelize.STRING(100),
    info: Sequelize.STRING(10000),
    createTime: Sequelize.STRING(100)
}, {
    timestamps: false
});

/**
 * 查询指定id的新闻
 * @param {*} id 新闻ID
 */
export async function GetNews(id) {
    return await News.findOne({ where: { id } });
}

/**
 * 查询指所有新闻
 */
export async function GetNewsList(page, pageSize) {
    return await News.findAndCountAll({
        order: [[ 'createTime', 'DESC' ]],
        limit: Number(pageSize),
        offset: (page - 1) * Number(pageSize)
    })
}

/**
 * 删除一条新闻信息
 * @param {*} data 数据对象
 */
export async function DeleteNews(id) {
    return await News.destroy({
        where: { id }
    });
}
/**
 * 插入一条新闻信息
 * @param {*} data 数据对象
 */
export async function AddNews(options) {
    console.log(options)
    return await News.create(options);
}

/**
 * 更新一条新闻信息
 * @param {*} data 数据对象
 */
export async function UpdateNews(options) {
    return await News.update(options, {
        where: {
            id: options.id
        }
    });
}
