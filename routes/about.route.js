const router = require('express').Router()
const aboutController = require('../controllers/about.controller')



router.get('/', aboutController.getAboutPageController)



module.exports = router