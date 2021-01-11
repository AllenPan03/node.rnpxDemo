const { GetNews, GetNewsList, AddNews, UpdateNews, DeleteNews } = require("../models/news")
const { renderData } = require("../../config/render")
const { getUuid } = require("../../util/utils")
/**
 * 获取新闻信息
 * @return 新闻信息对象
 */
export async function getNews(ctx) {
    const data = await GetNews(ctx.query.id);
    renderData(ctx, data)
}
/**
 * 获取新闻列表
 * @return 新闻列表对象
 */
export async function getNewsList(ctx) {
    const { page, pageSize } = ctx.query;
    const data = await GetNewsList(page, pageSize);
    renderData(ctx, data);
}

/**
 * 添加新闻
 */
export async function addNews(ctx) {
    console.log(111)
    const options = ctx.request.body;
    options.id = Number(getUuid());
    options.createTime = new Date().getTime();
    console.log(options)
    try {
        const data = await AddNews(options);
        renderData(ctx, data)
    } catch (err) {
        renderData(ctx, null, 103, err)
    }
}

/**
 * 更新新闻
 */
export async function updateNews(ctx) {
    const options = ctx.request.body;
    try {
        const data = await UpdateNews(options);
        renderData(ctx, data)
    } catch (err) {
        renderData(ctx, null, 103, "数据库操作失败")
    }
}

/**
 * 删除新闻信息
 * @return 新闻信息对象
 */
export async function deleteNews(ctx) {
    const data = await DeleteNews(ctx.request.body.id);
    renderData(ctx, data)
}

