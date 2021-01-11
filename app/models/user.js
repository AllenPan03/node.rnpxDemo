const { sequelize } = require("../../config/db")
const Sequelize = require('sequelize');
const User = sequelize.define('POLO_USERS', {
    id: {
        type: Sequelize.BIGINT,
        primaryKey: true
    },
    name: Sequelize.STRING(100),
    password: Sequelize.STRING(100)
}, {
    timestamps: false
});

/**
 * 查询指定用户
 * @param {*} options 查询条件
 */
export async function GetUser(options) {
    return await User.findOne({ where: options });
}