const router = require('express').Router()
const multer = require('multer')
const booksController = require('../controllers/addbook.controller')
const isAuth = require('../routes/guardAuth')


router.get('/', isAuth.isAuth, booksController.getAddBookController)
router.post('/', multer({
    storage: multer.diskStorage({
        destination: (req, file, cb) => {
            cb(null, 'assets/uploads')
        },
        filename: (req, file, cb) => {
            // const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
            // cb(null, file.originalname + '-' + uniqueSuffix)
            cb(null, Date.now() + ' ' + file.originalname)
        },
    })
}).single('image'), isAuth.isAuth, booksController.postAddBookController)


module.exports = router