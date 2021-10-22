const router = require('express').Router()
const contactController = require('../controllers/contact.controller')



router.get('/', contactController.getContactPageController)



module.exports = router