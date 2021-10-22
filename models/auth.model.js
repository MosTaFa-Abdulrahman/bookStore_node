const mongoose = require('mongoose')
const bcrypt = require('bcrypt')


let authSchema = mongoose.Schema({
    name: String,
    email: String,
    password: String,
})
let User = mongoose.model('user', authSchema)
let url = 'mongodb://localhost:27017/library'

module.exports.registerPageModel = ((name, email, password) => {

    return new Promise((resolve, reject) => {

        mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true }).then(() => {

            return User.findOne({ email: email })
        }).then((user) => {
            if (user) {
                mongoose.disconnect()
                reject('email is used ♠')
            } else {
                return bcrypt.hash(password, 10)
            }
        }).then((hashPassword) => {
            let user = new User({
                name: name,
                email: email,
                password: hashPassword
            })
            return user.save()
        }).then((user) => {
            mongoose.disconnect()
            resolve('Registerd Good ♦')
        }).catch(err => reject(err))


    })


})


module.exports.loginPageModel = ((email, password) => {

    return new Promise((resolve, reject) => {

        mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true }).then(() => {

            return User.findOne({ email: email })
        }).then((user) => {
            if (user) {
                bcrypt.compare(password, user.password).then((verif) => {
                    if (verif) {
                        mongoose.disconnect()
                        resolve(user._id)
                    } else {
                        mongoose.disconnect()
                        reject('Invalid Password ♠')
                    }
                })
            } else {
                mongoose.disconnect()
                reject('email is used ♠')
            }
        }).catch(err => reject(err))



    })

})