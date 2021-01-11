let digo = require('digo');
let path = require('path');
/**
 * 打包静态资源
 */
exports.copyStatic = () => {
    const staticPath = path.resolve(process.cwd(), 'static');
    if (digo.existsDir(staticPath)) {
        digo.copyDir(staticPath, path.resolve(process.cwd(), 'node_modules'));
    }
}