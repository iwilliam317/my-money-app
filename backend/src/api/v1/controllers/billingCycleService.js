const BillingCycle = require('../models/billingCycle')

BillingCycle.methods(['get', 'post', 'put', 'delete'])
BillingCycle.updateOptions({new: true, runValidators: true})

BillingCycle.route('count', (req, res, next) => {
    BillingCycle.count((error, value) => {
        if (error) 
            return res.status(500).json({ errors: [error]})
        
        res.json({ value })
    })
})

BillingCycle.route('summary', (req, res, next) => {
    BillingCycle.aggregate([
        { $project: {
            _id: 0,
            credit : { $sum : "$credits.value" },
            debit: { $sum : "$debts.value" }
        } },
    ]).exec((error, result) => {
        if(error)
            return res.status(500).json({ errors: [error]})
        res.send({ result })
    })
})

module.exports = BillingCycle
