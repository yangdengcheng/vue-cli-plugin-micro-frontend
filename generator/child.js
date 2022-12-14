const childMain = require('./template/child/main')

module.exports = (api) => {
    const { port } = api.options
    const { projectName } = api.rootOptions

    api.extendPackage({
        scripts: {
            serve: `vue-cli-service serve --port ${port}`
        }
    })

    api.postProcessFiles((files) => {
        const routerConfigPath = 'src/router/index.js'

        if (files[routerConfigPath]) {
            files[routerConfigPath] = files[routerConfigPath].replace(
                /base: process.env.BASE_URL,/,
                `base: window.__POWERED_BY_QIANKUN__ ? '/${projectName}' : '/',`
            )
        }

        if (!files[api.entryFile].match(/\nnew Vue\(/)) {
            files['src/child-main.js'] = childMain.standard.replace(
                /(new Vue\([\s\S]*)/,
                childMain.replacement
            )
            console.info('\n暂无法自动转换该项目的 main.js 文件，请参考 src/child-main.js 手动修改\n')
        } else {
            files[api.entryFile] = files[api.entryFile].replace(
                /(new Vue\([\s\S]*)/,
                childMain.replacement
            )
        }
    })
}