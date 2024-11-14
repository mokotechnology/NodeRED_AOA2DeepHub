module.exports = {
    userDir: '/data',
    functionGlobalContext: {
        aoaConfig: {
            host: '192.168.0.66',
            port: '44444',
            token: '',
            authType: 'Bearer 3',  // 认证类型
            headers: {
                'Content-Type': 'application/json; charset=utf-8'
            }
        },
        deepHubConfig: {
            host: '192.168.0.66',
            port: '8081',
            token: '',
            authType: 'Bearer 3',  // 认证类型
            headers: {
                'Content-Type': 'application/json; charset=utf-8'
            }
        }
    },
    httpNodeRoot: '',
    debug: {
        console: true
    }
};
