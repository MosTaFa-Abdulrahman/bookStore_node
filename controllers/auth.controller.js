const authModel = require('../models/auth.model')



//          Register
module.exports.getRegisterPage = ((req, res, next) => {
    res.render('register', { verifUser: req.session.userId, messages: req.flash('erorr')[0] })
})

module.exports.postRegisterData = ((req, res, next) => {
    authModel.registerPageModel(req.body.name, req.body.email, req.body.password).then((user) => {
        res.redirect('/login')
    }).catch((msg) => {
        req.flash('erorr', msg)
        res.redirect('/register')
    })
})



//          Login
module.exports.getLoginPage = ((req, res, next) => {
    res.render('login', { verifUser: req.session.userId, messages: req.flash('erorr')[0] })
})

module.exports.postLoginData = ((req, res, next) => {
    authModel.loginPageModel(req.body.email, req.body.password).then(id => {
        req.session.userId = id
        res.redirect('/')
    }).catch((err) => {
        req.flash('erorr', err)
        res.redirect('/login')
    })
})



//          LogOut
module.exports.logoutController = ((req, res, next) => {
    req.session.destroy(() => {
        res.redirect('/login')
    })
})