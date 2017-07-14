const webpack = require('webpack');
const config = require('./webpack.config.js');

config.devServer = {
    publicPath: "/",
    contentBase: "../target/dev-server/",
    disableHostCheck: true,
    proxy: {
        "/v1": {
            target: "https://api-dev.2haohr.com",
            changeOrigin: true
        },
        "/": {
            bypass: function(req) {
                const re = /(\/[a-zA-Z0-9\-\_]*)+(\/)?(\?.+)?/i
                if (re.test(req.url)) {
                    return "/home.html"
                }
            }
        }
    }
}

module.exports = config;
