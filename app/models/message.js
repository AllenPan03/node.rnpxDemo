const { sequelize } = require("../../config/db")
const Sequelize = require('sequelize');
const msgObj = {
    id: {
        type: Sequelize.BIGINT,
        primaryKey: true
    },
    name: Sequelize.STRING(100),
    tel: Sequelize.STRING(100),
    email: Sequelize.STRING(100),
    content: Sequelize.STRING(10000),
    createTime: Sequelize.STRING(100)
};
const Msg = sequelize.define('POLO_MSGS', msgObj, {
    timestamps: false
});

/**
 * 查询指所有新闻
 */
export async function GetMsgList(page, pageSize, options) {
    const msgKeys = Object.keys(msgObj);
    for (var key in options) {
        if (!msgKeys.includes(key)) {
            Reflect.deleteProperty(options, key);
        }
    }
    return await Msg.findAndCountAll({
        where: options,
        limit: Number(pageSize),
        order: [[ 'createTime', 'DESC' ]],
        offset: (page - 1) * Number(pageSize)
    })
}
/**
 * 插入一条新闻信息
 * @param {*} data 数据对象
 */
export async function AddMsg(options) {
    return await Msg.create(options);
}