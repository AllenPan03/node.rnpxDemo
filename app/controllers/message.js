const { AddMsg, GetMsgList } = require("../models/message")
const { renderData } = require("../../config/render")
const { getUuid } = require("../../util/utils")

/**
 * 获取留言列表
 * @return 留言列表对象
 */
export async function getMsgList(ctx) {
    const { page, pageSize, ...options } = ctx.query;
    const data = await GetMsgList(page, pageSize, options);
    renderData(ctx, data);
}

/**
 * 添加留言
 */
export async function msgSubmit(ctx) {
    const options = ctx.request.body;
    options.id = Number(getUuid());
    options.createTime = new Date().getTime();
    try {
        const data = await AddMsg(options);
        renderData(ctx, data)
    } catch (err) {
        renderData(ctx, null, 103, err)
    }
}
