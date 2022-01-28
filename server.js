var express = require('express')
var { engine } = require('express-handlebars')
var app = express()
var Sequelize = require('sequelize')

app.engine('handlebars', engine({extname: '.hbs', defaultLayout : 'main'}))
app.set('view engine', 'handlebars')
app.set("views", "./views")

app.get('/pagamento', (req, res) => {
    res.render('pagamento');
});

app.get('/add-pagamento', (req, res) => {
    res.render('add-pagamento');
})

const sequelize = new Sequelize('gerenciador','root','123456', {
    host: 'localhost',
    dialect: 'mysql',
});

sequelize.authenticate().then(function(){
    console.log('Conexão realizada com sucesso!');
}).catch(function(err){
    console.log('Erro ao realizar a conexão ' + err);
});

const User = sequelize.define('pagamentos', {
    nome: {
        type: Sequelize.STRING,
    },
    valor: {
        type: Sequelize.DOUBLE
    }
});

//User.sync({force: true});

User.create({
    nome: "Energia",
    valor: 220
})

app.get("/", (req, res) => {
    res.send('Gerenciador Financeiro');
});
app.get("/gerenciador", (req, res) => {
    res.sendFile(__dirname + "/src/html/index.html");
})
app.get("/contato", (req, res) => {
    res.send('Página de contato pessoais');
})

app.listen(8080, () => {
    console.log("Server is runing!");
})