const BillingCycle = require('../models/billingCycle')

BillingCycle.methods(['get', 'post', 'put', 'delete'])
BillingCycle.updateOptions({new: true, runValidators: true})

BillingCycle.route('count', (req, res) => {
    BillingCycle.count((error, value) => {
        if (error) 
            return res.status(500).json({ errors: [error]})
        
        res.json({ value })
    })
})

module.exports = BillingCycle
