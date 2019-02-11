module.exports = app => {

    const router = require('express').Router();
    app.use('/api', router)

    // node-restful
    const billingCycleService = require('../api/controllers/billingCycle')
    // register routes [GET, PUT, POST, DELETE]
    billingCycleService.register(router, '/billingCycles')
}