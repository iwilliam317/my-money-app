const restful = require('node-restful')

const mongoose = restful.mongoose

const creditSchema = new mongoose.Schema({
    name: {
        type: 'String',
        required: true
    },
    value: {
        type: 'Number',
        required: true,
        min: 0
    }
})

const debitSchema = new mongoose.Schema({
    name: {
        type: 'String',
        required: true
    },
    value: {
        type: 'Number',
        required: true,
        min: 0,
        status: {
            type: 'String',
            required: true,
            uppercase: true,
            enum: ['PAYED', 'PENDING', 'SCHEDULED']
        }
    }
})

const BillingCycleSchema = new mongoose.Schema({
    debit: debitSchema,
    credit: creditSchema
})

module.exports = restful.model('BillingCycle', BillingCycleSchema)