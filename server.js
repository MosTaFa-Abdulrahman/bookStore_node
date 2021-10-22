const express = require('express')
const app = express()
const path = require('path')
const session = require('express-session')
const MongoDBStore = require('connect-mongodb-session')(session)
const flash = require('connect-flash')


const RouterHome = require('./routes/home.route')
const RouterBooks = require('./routes/book.route')
const RouterAuth = require('./routes/auth.route')
const RouterAddBook = require('./routes/addbook.route')
const RouterMyBooks = require('./routes/mybooks.route')
const RouterContact = require('./routes/contact.route')
const RouterAbout = require('./routes/about.route')


app.set('view engine', 'ejs')
app.set('views', 'views')
app.use(express.static(path.join(__dirname, 'assets')))
app.use(flash())

let Store = new MongoDBStore({
    uri: 'mongodb://localhost:27017/library',
    collection: 'session'
})

Store.on('error', (err) => {
    console.log(err);
});

app.use(session({
    secret: 'this is my secret key sdfioweiuowjcdasdasdasdss',
    store: Store,
    resave: true,
    saveUninitialized: true
}))

app.use('/', RouterHome)
app.use('/books', RouterBooks)
app.use('/', RouterAuth)
app.use('/addbook', RouterAddBook)
app.use('/mybooks', RouterMyBooks)
app.use('/contact', RouterContact)
app.use('/about', RouterAbout)




app.listen(3000, () => { console.log('Server Running'); })