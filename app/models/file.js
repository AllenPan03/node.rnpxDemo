const { sequelize } = require("../../config/db")
const Sequelize = require('sequelize');
const fileObj = {
    id: {
        type: Sequelize.BIGINT,
        primaryKey: true
    },
    name: Sequelize.STRING(100),
    fileUrl: Sequelize.STRING(100),
};
const File = sequelize.define('POLO_FILES', fileObj, {
    timestamps: false
});


/**
 * 查询指所有产品
 */
export async function GetFileList(page, pageSize, options) {
    const proKeys = Object.keys(fileObj);
    for (var key in options) {
        if (!proKeys.includes(key)) {
            Reflect.deleteProperty(options, key);
        }
    }
    return await File.findAndCountAll({
        where: options,
        limit: Number(pageSize),
        offset: (page - 1) * Number(pageSize)
    })
}
/**
 * 删除一条产品信息
 * @param {*} data 数据对象
 */
export async function DeleteFile(id) {
    return await File.destroy({
        where: { id }
    });
}
/**
 * 插入一条资料文件
 * @param {*} data 数据对象
 */
export async function AddFile(options) {
    return await File.create(options);
}





