module.exports.getAboutPageController = ((req, res) => {
    res.render('about', { verifUser: req.session.userId })
})