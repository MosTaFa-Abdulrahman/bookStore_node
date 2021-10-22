const mongoose = require('mongoose')



let schemaBooks = mongoose.Schema({
    // _id: String,
    title: String,
    description: String,
    price: Number,
    author: String,
    image: String,
    userId: String
})
let Books = mongoose.model('book', schemaBooks)
let url = 'mongodb://localhost:27017/library'

module.exports.getThreeBooks = () => {
    return new Promise((resolve, reject) => {

        mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true }).then(() => {
            return Books.find({}).limit(3)
        }).then(books => {
            mongoose.disconnect()
            resolve(books)
        }).catch(err => { reject(err) })



    })

}

module.exports.getAllBooks = () => {
    return new Promise((resolve, reject) => {

        mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true }).then(() => {
            return Books.find({})
        }).then(books => {
            mongoose.disconnect()
            resolve(books)
        }).catch(err => { reject(err) })



    })

}

module.exports.getOneBookDetails = (id) => {
    return new Promise((resolve, reject) => {

        mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true }).then(() => {
            return Books.findById(id)
        }).then(books => {
            mongoose.disconnect()
            resolve(books)
        }).catch(err => reject(err))



    })

}

module.exports.postDataBookModel = (title, description, author, price, image, userId) => {

    return new Promise((resolve, reject) => {
        mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true }).then(() => {

            let book = new Books({
                title: title,
                description: description,
                author: author,
                price: price,
                image: image,
                userId: userId,
            })
            return book.save()
        }).then(() => {
            mongoose.disconnect()
            resolve('Book Add')
        }).catch((err) => {
            mongoose.disconnect()
            reject(err)
        })



    })

}

module.exports.getMyBooksModel = (userId => {

    return new Promise((resolve, reject) => {

        mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true }).then(() => {
            return Books.find({ userId: userId })
        }).then(books => {
            mongoose.disconnect()
            resolve(books)
        }).catch(err => reject(err))



    })

})

module.exports.deleteBook = (id) => {
    return new Promise((resolve, reject) => {

        mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true }).then(() => {
            return Books.deleteOne({ _id: id })
        }).then(() => {
            mongoose.disconnect()
            resolve(true)
        }).catch(err => { reject(err) })



    })

}

//  Update ( GET && POST )
module.exports.getPageUpdateBookModel = (id) => {
    return new Promise((resolve, reject) => {

        mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true }).then(() => {
            return Books.findById(id)
        }).then((book) => {
            mongoose.disconnect()
            resolve(book)
        }).catch(err => { reject(err) })



    })

}
module.exports.postUpdateBookModel = (bookId, title, description, author, price, filename, userId) => {
    return new Promise((resolve, reject) => {
        mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true }).then(() => {

            return Books.updateOne({ _id: bookId }, { title: title, description: description, author: author, price: price, filename: filename, userId: userId })
        }).then(() => {
            mongoose.disconnect()
            resolve('Book Updated')
        }).catch((err) => {
            mongoose.disconnect()
            reject(err)
        })



    })
}