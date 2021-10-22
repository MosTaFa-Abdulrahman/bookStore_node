module.exports.isAuth = ((req, res, next) => {
    if (req.session.userId) {
        next()
    } else {
        res.redirect('/login')
    }
})

module.exports.noAuth = ((req, res, next) => {
    if (req.session.userId) {
        res.redirect('/')
    } else {
        next()
    }
})