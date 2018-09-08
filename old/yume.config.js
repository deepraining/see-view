
"use strict";

const moment = require('moment');

const packageJson = require('./package.json');

module.exports = {
    // module definition
    modules: {
        index: {
            js: 'src/index.js',
            filename: 'see-view',
            library: 'seeView',
            libraryTarget: "umd"
        },
        demo: {
            html: 'demo/index.html',
            js: 'demo/index.js'
        },
        example: {
            html: 'example/index.html',
            js: 'example/index.js'
        }
    },
    externals: {
        jquery : {
            commonjs: 'jquery',
            amd: 'jquery',
            commonjs2: 'jquery',
            root: 'jQuery'
        }
    },
    banner: `
    see-view v${packageJson.version}

    https://github.com/senntyou/see-view

    @senntyou <jiangjinbelief@163.com>

    ${moment().format('YYYY-MM-DD HH:mm:ss')}
    `
};

