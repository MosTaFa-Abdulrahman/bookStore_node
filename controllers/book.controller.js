const bookModel = require('../models/book.model')


module.exports.getAllBooksController = ((req, res, next) => {

    bookModel.getAllBooks().then((books) => {
        res.render('books', { books: books, verifUser: req.session.userId })
    })
})

module.exports.getOneBookDetailsController = ((req, res, next) => {

    let id = req.params.id
    bookModel.getOneBookDetails(id).then(resbook => {
        res.render('details', { book: resbook, verifUser: req.session.userId })
    })
})