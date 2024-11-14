module.exports = {
    userDir: '/data',
    functionGlobalContext: {
        beaconListConfig: {
            host: '192.168.0.66',
            port: '44444',
            token: 'asdfadafasdfasdfsdf',
            authType: 'Bearer 3',  // 认证类型
            headers: {
                'Content-Type': 'application/json; charset=utf-8'
            }
        },
        providersConfig: {
            host: '192.168.0.66',
            port: '8081',
            token: 'asdfadafasdfasdfsdf',
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
