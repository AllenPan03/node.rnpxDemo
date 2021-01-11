const { renderData } = require("../../config/render")
const { log } = require("../../util/utils")
const koajwt = require('koa-jwt')
/**
 * 跨域处理
 * @example app.use(cross())
 */
export function cross() {
    return async function (ctx, next) {
        ctx.set('Access-Control-Allow-Origin', ctx.get("Origin") == null ? "*" : ctx.get("Origin"));
        ctx.set('Access-Control-Allow-Methods', ctx.get("Access-Control-Request-Method") || "PUT, GET, POST, DELETE, OPTIONS");
        ctx.set('Access-Control-Allow-Headers', ctx.get("Access-Control-Request-Headers") || "Content-Type");
        ctx.set('Access-Control-Allow-Credentials', "true");

        if (ctx.method == "OPTIONS") {
            ctx.status = 204
        }
        await next();
    }
}

/**
 * 兼容路由后缀，如 xxx/xxx.json == xxx/xxx 地址
 * @param suffixes string[] 后缀列表
 * @example app.use(adaptRouteSuffix([".json"]))
 */
export function adaptRouteSuffix(suffixes = []) {
    return async function (ctx, next) {
        suffixes.forEach(e => {
            var re = new RegExp(e);
            ctx.path = ctx.path.replace(re, "")
        })
        await next();
    }
}

/**
 * 错误日志捕获
 * @example app.use(onerror())
 */
export function onerror() {
    return async function (ctx, next) {
        return next().catch((err) => {
            if (err.status === 401) {
                ctx.status = 200;
                renderData(ctx, null, 401, "用户没有权限（令牌、用户名、密码错误）", err.message)
            } else if (ctx.status === 404) {
                var err = new Error('Not Found');
                err.status = 404;
                renderData(ctx, null, 404, "系统繁忙，请联系管理员", err.message);
            } else {
                renderData(ctx, null, -1, "服务端错误", err.message);
                log(err.message);
            }
        })
        // try {
        //     console.log(ctx.status)
        //     await next();
        //     if (ctx.status === 401) {
        //         ctx.status = 401;
        //         renderData(ctx, null, -1, "无登录权限", err.message)
        //         // ctx.body = 'Protected resource, use Authorization header to get access\n';
        //     } else if (ctx.status == 404) {
        //         var err = new Error('Not Found');
        //         err.status = 404;
        //         await ctx.render("404");
        //     }
        // } catch (err) {
        //     renderData(ctx, null, -1, "服务端错误", err.message)
        //     log(err.message)
        // }
    }
}

/** 
 * 延迟
 * @example await delay(5000) // 延迟5s
 */
export function delay(time) {
    return new Promise(function (resolve) {
        setTimeout(function () {
            resolve();
        }, time);
    });
};

/**
 * 请求头拦截
 */
export function onheader() {
    return koajwt({
        secret: 'polo_token'
    }).unless({
        path: [/\/user\/login|swagger|front/]
    })
}