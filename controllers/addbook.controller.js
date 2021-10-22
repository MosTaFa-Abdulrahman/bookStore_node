const bookModel = require('../models/book.model')


module.exports.getAddBookController = ((req, res, next) => {

    res.render('addbook', { verifUser: req.session.userId, Successmessege: req.flash('Successmessege')[0], Erorrmessege: req.flash('Erorrmessege')[0] })

})

module.exports.postAddBookController = ((req, res, next) => {

    console.log(req.body);
    console.log(req.file.filename);

    bookModel.postDataBookModel(req.body.title, req.body.description, req.body.author, req.body.price, req.file.filename, req.session.userId).then((msg) => {
        req.flash('Successmessege', msg)
        res.redirect('/addbook')
            // console.log(msg);
    }).catch((err) => {
        req.flash('Erorrmessege', err)
        res.redirect('/addbook')
            // console.log(err);
    })
})