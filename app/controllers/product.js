const { GetPro, GetProList, DeletePro, AddPro, UpdatePro } = require("../models/product")
const { renderData } = require("../../config/render")
const { getUuid } = require("../../util/utils")
/**
 * 获取产品信息
 * @return 产品信息对象
 */
export async function getPro(ctx) {
    const data = await GetPro(ctx.query.id);
    if (data.firstUrls) data.firstUrls = data.firstUrls.split(',');
    if (data.detailUrls) data.detailUrls = data.detailUrls.split(',');
    if (data.advantage) data.advantage = data.advantage.split(',');
    renderData(ctx, data)
}
/**
 * 获取产品列表
 * @return 产品列表对象
 */
export async function getProList(ctx) {
    const { page, pageSize, ...options } = ctx.query;
    const data = await GetProList(page, pageSize, options);
    renderData(ctx, data);
}

/**
 * 添加产品
 */
export async function addPro(ctx) {
    const options = ctx.request.body;
    options.id = Number(getUuid());
    try {
        const data = await AddPro(options);
        renderData(ctx, data)
    } catch (err) {
        renderData(ctx, null, 103, err)
    }
}

/**
 * 更新产品
 */
export async function updatePro(ctx) {
    const options = ctx.request.body;
    try {
        const data = await UpdatePro(options);
        renderData(ctx, data)
    } catch (err) {
        renderData(ctx, null, 103, "数据库操作失败")
    }
}

/**
 * 删除产品信息
 * @return 产品信息对象
 */
export async function deletePro(ctx) {
    const data = await DeletePro(ctx.request.body.id);
    renderData(ctx, data)
}

