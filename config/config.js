/** 调试模式 */
export const debug = process.platform !== "linux";

/** 服务器端口 */
export const serverPort = 3000;

/** 服务器部署地址 */
export const serverUrl = debug ? "//localhost:" + serverPort : "//xxx.com";

/** 服务器部署环境 */
export const env = process.env.NODE_ENV;

export const ossStore = {
    accessKeyId: 'your access key',
    accessKeySecret: 'your access secret',
    bucket: 'your bucket name',
    region: 'oss-cn-hangzhou'
}
