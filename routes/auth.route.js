const authController = require('../controllers/auth.controller')
const noAuth = require('../routes/guardAuth')
const route = require('express').Router()
const bodyParser = require('body-parser').urlencoded({ extended: true })


route.get('/register', noAuth.noAuth, authController.getRegisterPage)
route.post('/register', bodyParser, authController.postRegisterData)



route.get('/login', noAuth.noAuth, authController.getLoginPage)
route.post('/login', bodyParser, authController.postLoginData)



route.post('/logout', authController.logoutController)


module.exports = route