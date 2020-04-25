module.exports = {
    devServer: {
        // host: '0.0.0.0',
        // port: 8080,
        https: false,
        hotOnly: false,
        proxy: {
            '/enterprise': {
                target: 'http://121.37.170.18:8082/',
                changeOrigin: true,
                secure: false,
                pathRewrite: {
                    '^/enterprise': ''
                }
            }
        }
    }
}
