const router = require('express').Router()
const HomeController = require('../controllers/home.controller')

router.get('/', HomeController.threeBooksController)



module.exports = router