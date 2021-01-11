import { where } from "sequelize";

const { sequelize } = require("../../config/db")
const Sequelize = require('sequelize');
const proObj = {
    id: {
        type: Sequelize.BIGINT,
        primaryKey: true
    },
    name: Sequelize.STRING(100),
    bannerUrl: Sequelize.STRING(100),
    seriesDesc: Sequelize.STRING(100),
    specification: Sequelize.STRING(100),
    size: Sequelize.STRING(100),
    material: Sequelize.STRING(100),
    color: Sequelize.STRING(100),
    field: Sequelize.STRING(100),
    brief: Sequelize.STRING(100),
    advantage: Sequelize.STRING(100),
    seriesType: Sequelize.STRING(1000),
    firstUrls: Sequelize.STRING(100),
    detailUrls: Sequelize.STRING(1000)
};
const Product = sequelize.define('POLO_PROS', proObj, {
    timestamps: false
});
/**
 * 查询指定id的产品
 * @param {*} id 产品ID
 */
export async function GetPro(id) {
    return await Product.findOne({ where: { id } });
}

/**
 * 查询指所有产品
 */
export async function GetProList(page, pageSize, options) {
    const proKeys = Object.keys(proObj);
    for (var key in options) {
        if (!proKeys.includes(key)) {
            Reflect.deleteProperty(options, key);
        }
    }
    return await Product.findAndCountAll({
        where: options,
        limit: Number(pageSize),
        offset: (page - 1) * Number(pageSize)
    })
}
/**
 * 删除一条产品信息
 * @param {*} data 数据对象
 */
export async function DeletePro(id) {
    return await Product.destroy({
        where: { id }
    });
}
/**
 * 插入一条用户信息
 * @param {*} data 数据对象
 */
export async function AddPro(options) {
    return await Product.create(options);
}

/**
 * 更新一条用户信息
 * @param {*} data 数据对象
 */
export async function UpdatePro(options) {
    return await Product.update(options, {
        where: {
            id: options.id
        }
    });
}



