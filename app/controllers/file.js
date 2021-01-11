const { renderData } = require("../../config/render");
const { GetFileList, DeleteFile, AddFile } = require("../models/file")
const { debug } = require("../../config/config")
const { getUuid } = require("../../util/utils")
const { log } = require("../../util/utils")
var OSS = require('ali-oss');
let fs = require('fs');
let client = new OSS({
    region: 'oss-cn-hangzhou',
    secure: !debug,//https的情况下设置为true
    // internal: !debug,//是否使用阿里云内网访问，默认false。比如通过ECS访问OSS，则设置为true，采用internal的endpoint可节约费用。
    accessKeyId: 'accessKeyId',
    accessKeySecret: 'accessKeySecret',
    bucket: 'rnpxDemo',
    // timeout: 1000
});
/**
 * 上传文件
 * @return 文件对象
 */
export async function uploadFile(ctx) {
    const file = ctx.request.files.file;
    try {
        const stream = fs.createReadStream(file.path);
        const newName = `${new Date().getTime()}.${file.name.split('.')[1]}`;
        const result = await client.putStream(`poloplast/${newName}`, stream);
        await client.putACL(`poloplast/${newName}`, 'public-read');
        const { url } = result;
        renderData(ctx, url);
    } catch (e) {
        console.log(e)
        log('文件上传失败：' + e)
        renderData(ctx, null, 102, e)
    }
}
/**
 * 替换文件下载地址
 * @return 文件对象
 */
function getDownloadUrl(url) {
    let newUrl = '', fileName = url.split('aliyuncs.com/')[1];
    try {
        // 通过Content-Disposition指定attachment来强制下载
        newUrl = client.signatureUrl(fileName, {
            expires: 3600,
            response: {
                'content-disposition': 'attachment; filename="' + fileName + '"'
            }
        });
    } catch (e) {
        console.log(e);
    }
    return newUrl;
}
/**
 * 获取资料文件列表
 * @return 文件对象
 */
export async function getDownloadFiles(ctx) {
    const { page, pageSize, ...options } = ctx.query;
    const data = await GetFileList(page, pageSize, options);
    if (data.rows && data.rows.length > 0) {
        data.rows.forEach(x => {
            x.fileUrl = getDownloadUrl(x.fileUrl);
        })
    }
    renderData(ctx, data);
}
/**
 * 获取资料文件列表
 * @return 文件对象
 */
export async function getFiles(ctx) {
    const { page, pageSize, ...options } = ctx.query;
    const data = await GetFileList(page, pageSize, options);
    renderData(ctx, data);
}

/**
 * 添加文件
 */
export async function addFile(ctx) {
    const options = ctx.request.body;
    options.id = Number(getUuid());
    try {
        const data = await AddFile(options);
        renderData(ctx, data)
    } catch (err) {
        renderData(ctx, null, 103, err)
    }
}

/**
 * 删除文件信息
 * @return 文件信息对象
 */
export async function deleteFile(ctx) {
    const data = await DeleteFile(ctx.request.body.id);
    renderData(ctx, data)
}