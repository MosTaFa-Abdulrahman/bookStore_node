const bookModel = require('../models/book.model')


module.exports.getMyBooksPage = ((req, res, next) => {
    bookModel.getMyBooksModel(req.session.userId).then((books) => {
        // console.log(req.session.userId);
        // console.log(books);
        res.render('mybooks', { verifUser: req.session.userId, mybooks: books })
    })

})


module.exports.deleteBookController = ((req, res, next) => {
    let id = req.params.id
    bookModel.deleteBook(id).then(() => {
        res.redirect('/mybooks')
    }).catch((err) => {
        console.log(err);
    })

})



//            Update
module.exports.getMyUpdatePageController = ((req, res, next) => {
    let id = req.params.id
    bookModel.getPageUpdateBookModel(id).then(book => {
        // console.log(book);
        res.render('updatebook', { verifUser: req.session.userId, bookUpdate: book, Successmessege: req.flash('Successmessege')[0], Erorrmessege: req.flash('Erorrmessege')[0] })
    })

})

module.exports.postUpdateBookController = ((req, res, next) => {
    if (req.file) {
        bookModel.postUpdateBookModel(req.body.bookId, req.body.title, req.body.description, req.body.author, req.body.price, req.file.filename, req.session.userId).then((msg) => {
            req.flash('Successmessege', msg)
            res.redirect(`/mybooks/update/${req.body.bookId}`)
        }).catch((err) => {
            req.flash('Erorrmessege', err)
            res.redirect(`/mybooks/update/${req.body.bookId}`)
        })
    } else {
        bookModel.postUpdateBookModel(req.body.bookId, req.body.title, req.body.description, req.body.author, req.body.price, req.body.oldImage, req.session.userId).then((msg) => {
            req.flash('Successmessege', msg)
            res.redirect(`/mybooks/update/${req.body.bookId}`)
        }).catch((err) => {
            req.flash('Erorrmessege', err)
            res.redirect(`/mybooks/update/${req.body.bookId}`)
        })
    }


})