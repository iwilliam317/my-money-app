const config = {
    test: {
        mongodbURL : 'mongodb://localhost:27017/mymoney-test'
    },
    development: {
        mongodbURL : process.env.MONGOLAB_URI_MY_MONEY || 'mongodb://localhost:27017/mymoney' ||'mongodb://mongo:27017/mymoney' 
    },
    production : {
        mongodbURL : process.env.MONGOLAB_URI_MY_MONEY || 'mongodb://mongo:27017/mymoney'
    }
}
const env = process.env.NODE_ENV

module.exports = config[env]