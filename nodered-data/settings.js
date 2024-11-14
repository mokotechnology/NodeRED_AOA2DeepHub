module.exports = {
    userDir: '/data',
    functionGlobalContext: {
        aoaConfig: {
            host: process.env.AOA_CONFIG_HOST || 'default-host',
            port: process.env.AOA_CONFIG_PORT || 'default-port',
            token: process.env.AOA_CONFIG_TOKEN || '',
            authType: process.env.AOA_CONFIG_AUTH_TYPE || 'Bearer 3',
            headers: JSON.parse(process.env.AOA_CONFIG_HEADERS || '{}')
        },
        deepHubConfig: {
            host: process.env.DEEPHUB_CONFIG_HOST || 'default-host',
            port: process.env.DEEPHUB_CONFIG_PORT || 'default-port',
            token: process.env.DEEPHUB_CONFIG_TOKEN || '',
            authType: process.env.DEEPHUB_CONFIG_AUTH_TYPE || 'Bearer 3',
            headers: JSON.parse(process.env.DEEPHUB_CONFIG_HEADERS || '{}'),
	    deephub_zone_source_id: process.env.DEEPHUB_ZONE_SOURCE_ID
        }
    },
    httpNodeRoot: '',
    debug: {
        console: true
    }
};
