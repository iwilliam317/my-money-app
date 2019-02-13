module.exports = app => {

    const router = require('express').Router();
    app.use('/api/v1', router)

    // node-restful
    const billingCycleService = require('../api/v1/controllers/billingCycleService')
    // register routes [GET, PUT, POST, DELETE]
    billingCycleService.register(router, '/billing-cycles')
}