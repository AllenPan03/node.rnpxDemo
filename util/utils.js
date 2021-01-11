const digo = require("digo")
const request = require("request")
const path = require("path")
/** 删除数组中指定项 */
export function removeItem(array, item) {
    const index = array.indexOf(item)
    if (index >= 0) {
        array.splice(index, 1)
    }
}

/**
 * 删除数组中的重复项并返回新数组
 * @param arr 数组
 * @return 返回过滤后的新数组
 * @example [1, 9, 9, 0].unique() // [1, 9, 0]
 */
export function unique(arr) {
    const r = []
    for (const value of arr) {
        r.indexOf(value) < 0 && r.push(value)
    }
    return r
}

/** 删除数组中指定项 */
export function findLast(array, filter) {
    for (let i = array.length - 1; i >= 0; i--) {
        if (filter(array[i], i, array)) {
            return array[i]
        }
    }
}

/** 格式化时间为可读格式（如“3 分钟前”） */
export function formatDateReadable(date, now = new Date) {
    if (now >= date && date.getFullYear() === now.getFullYear()) {
        const monthDelta = now.getMonth() - date.getMonth()
        if (monthDelta === 0) {
            const dayDelta = now.getDate() - date.getDate()
            if (dayDelta === 0 || dayDelta === 1 && now.getHours() < date.getHours()) {
                const houreDelta = now.getHours() - date.getHours() + (dayDelta === 1 ? 24 : 0)
                if (houreDelta === 0 || houreDelta === 1 && now.getMinutes() < date.getMinutes()) {
                    const minuteDelta = now.getMinutes() - date.getMinutes() + (houreDelta === 1 ? 60 : 0)
                    if (minuteDelta === 0 || minuteDelta === 1 && now < date) {
                        const secondDelta = (now - date) / 1000 + (minuteDelta === 1 ? 60 : 0)
                        if (secondDelta < 1) {
                            return `刚刚`
                        }
                        return `${Math.round(secondDelta)} 秒前`
                    }
                    return `${minuteDelta} 分钟前`
                }
                return `${houreDelta} 小时前`
            }
            if (dayDelta === 1) {
                return `昨天`
            }
            if (dayDelta === 2) {
                return `前天`
            }
        }
        return formatDate(date, 'M月d日')
    }
    return formatDate(date, 'yyyy年M月d日')
}

/** 格式化大小为可读格式（如“10 M”） */
export function formatSizeReadable(size) {
    if (size < 1000) {
        return size + "B"
    }
    size /= 1024
    if (size < 1000) {
        return Math.round(size * 100) / 100 + "KB"
    }
    size /= 1024
    if (size < 1000) {
        return Math.round(size * 100) / 100 + "MB"
    }
    size /= 1024
    if (size < 1000) {
        return Math.round(size * 100) / 100 + "GB"
    }
    size /= 1024
    return Math.round(size * 100) / 100 + "TB"
}

/** 格式化指定的日期对象 */
export function formatDate(date, format = "yyyy-MM-dd HH:mm:ss") {
    return digo.formatDate(date, format)
}

/** 将对象的字符串表示形式转换为 HTML 编码的字符串 */
export function encodeHTML(data) {
    return digo.encodeHTML(data || "")
}

/** 异步获取文件或文件夹的属性，如果是链接则返回链接实际引用的文件属性 */
export function statsAsync(path, callback = () => { }) {
    digo.getStat(path, callback)
}

/** 异步读取指定的文件内容 */
export function readFileAsync(path, callback = () => { }) {
    digo.readFile(path, callback)
}

/** 异步写入指定的文件内容 */
export function writeFileAsync(path, data, callback = () => { }) {
    digo.writeFile(path, data, callback)
}

/** 异步向指定文件追加内容 */
export function appendFileAsync(path, data, callback = () => { }) {
    digo.appendFile(path, data, callback)
}

/** 异步复制指定的文件 */
export function copyFileAsync(from, to, callback = () => { }) {
    digo.copyFile(from, to, callback)
}

/** 异步移动指定的文件 */
export function moveFileAsync(from, to, callback = () => { }) {
    digo.moveFile(from, to, callback)
}

/** 异步删除指定的文件，如果文件不存在则直接返回 */
export function deleteFileAsync(path, callback = () => { }) {
    digo.deleteFile(path, callback)
}

/** 异步读取文件夹内的所有项 */
export function readDirAsync(path, callback = () => { }) {
    digo.readDir(path, callback)
}

/** 异步复制指定的文件夹 */
export function copyDirAsync(from, to, callback = () => { }) {
    digo.copyDir(from, to, callback)
}

/** 异步删除指定的文件夹 */
export function deleteDirAsync(path, callback = () => { }) {
    digo.deleteDir(path, callback)
}

/** 异步创建一个文件夹 */
export function createDirAsync(path, callback = () => { }) {
    digo.createDir(path, callback)
}

/** 确保已创建指定路径所在的文件夹 */
export function ensureParentDir(path) {
    digo.ensureParentDir(path)
}

/** 判断一个文件夹是否包含指定的路径 */
export function containsDir(parent, child) {
    if (!parent) {
        return true
    }
    if (!child) {
        return false
    }
    return digo.inDir(parent, child)
}

/** 搜索指定通配符匹配的文件 */
export function glob(path, pattern) {
    return digo.glob(pattern, { cwd: path })
}

/** 读取 JSON 文件 */
export function readJSON(path) {
    try {
        return JSON.parse(digo.readFile(path))
    } catch (e) {
        if (!digo.existsFile(path)) {
            return
        }
        throw e
    }
}

export function safeJSON(file) {
    try {
        return JSON.parse(file)
    } catch (e) {
        throw e
    }
}

/** 发送钉钉机器人 */
export function sendDingDing(url, data) {
    request.post({
        url: url,
        json: data
    })
}

/**
 * 清理对象
 */
export function cleanData(obj) {
    for (var key in obj) {
        if (key == undefined) {
            delete obj[key]
        }
    }
    return obj;
}

export function StringAs(string) {
    return '"' + string.replace(/(\\|\"|\n|\r|\t)/g, "\\$1") + '"';
}

export function log(str) {
    digo.appendFile(path.join(__dirname, "../server_log.log"), formatDate(new Date(Date.now()), 'yyyy-MM-dd HH:mm:ss') + ":" + str + "\n");
}

/**
 * 拼接URL查询参数
 */
export function joinQueryString(query) {
    let search = '?';
    for (let key in query) {
        let value = query[key];
        if (typeof (value) === 'undefined') {
            value = '';
        }
        value = encodeURIComponent(value);
        search += key + '=' + value + '&';
    }
    if (search[search.length - 1] == '&') {
        search = search.substring(0, search.length - 1);
    }
    return search;
};

/**
 * 获取uuid
 */
export function getUuid() {
    let s = [];
    let hexDigits = "0123456789";
    for (let i = 0; i < 10; i++) {
        s[i] = hexDigits.substr(Math.floor(Math.random() * 0x10), 1);
    }
    s[14] = "4";  // bits 12-15 of the time_hi_and_version field to 0010
    s[19] = hexDigits.substr((s[19] & 0x3) | 0x8, 1);  // bits 6-7 of the clock_seq_hi_and_reserved to 01
    // s[8] = s[13] = s[18] = s[23] = "-";
    let uuid = s.join("");
    return uuid;
}

