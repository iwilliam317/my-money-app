module.exports = (req, res, next) => {
    console.log('passing through middleware in construction...')
    console.log(res.locals.bundle)
    next()
}