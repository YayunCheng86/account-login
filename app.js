const express = require('express')
const exphbs = require('express-handlebars')
const bodyParser = require('body-parser')
const userLogin = require('./account_login')
const session = require('express-session')
const app = express()
const port = 3000

app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')
app.use(bodyParser.urlencoded({ extended: true }))

// 使用 session middleware
app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: false
}))

app.get('/', (req, res) => {
    if (req.session.userName) {
        let outcome = true
        res.render('login_outcome', { userName: req.session.userName, outcome })
    } else {
        res.render('index')
    }
})

app.post('/', (req, res) => {    
    let userName = userLogin(req.body)
    // 設定結果 => 沒配對: outcome = false ; 配對成功: outcome = true
    let outcome = false
    if(userName) {
        outcome = true  
        // 在 session 物件上新增 key 和 value
        req.session.userName = userName
    }  
    res.render('login_outcome', { outcome, userName })
})

app.listen(port, () => {
    console.log(`This is listening on http://localhost:${port}`)
})