module.exports.getContactPageController = ((req, res) => {
    res.render('contact', { verifUser: req.session.userId })
})