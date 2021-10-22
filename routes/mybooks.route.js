const router = require('express').Router()
const multer = require('multer')
const myBooksController = require('../controllers/mybooks.controller')
const isAuth = require('../routes/guardAuth')





router.get('/', isAuth.isAuth, myBooksController.getMyBooksPage)


router.get('/delete/:id', myBooksController.deleteBookController)


router.get('/update/:id', myBooksController.getMyUpdatePageController)
router.post('/update', multer({
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
}).single('image'), isAuth.isAuth, myBooksController.postUpdateBookController)



module.exports = router