const _ = require('lodash')

module.exports = (req, res, next) => {
    
    if(res.locals.bundle.errors){
        const errors = parseErrors(res.locals.bundle.errors)
        return res.status(500).send({ errors })
    }
       
    next()
}

const parseErrors = nodeRestfulErrors => {
    const errors = []
    _.forIn(nodeRestfulErrors, error => errors.push(error.message))
    return errors
}