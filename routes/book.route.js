const booksController = require('../controllers/book.controller')
const isAuth = require('../routes/guardAuth')
const router = require('express').Router()


router.get('/', isAuth.isAuth, booksController.getAllBooksController)
router.get('/:id', isAuth.isAuth, booksController.getOneBookDetailsController)







module.exports = router