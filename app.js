var express = require('express')
var { engine } = require('express-handlebars')
var app = express()

app.engine('handlebars', engine({extname: '.hbs', defaultLayout : 'main'}))
app.set('view engine', 'handlebars')
app.set("views", "./views")

app.get('/add-pagamento', function(req, res) {
    res.render('pagamento')
})

app.listen(3000, () => {
    console.log('funcionando....')
})