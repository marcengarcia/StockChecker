const express = require ('express')
const app = express()
const exphbs = require('express-handlebars')
const path = require('path')

const PORT = process.env.PORT || 5000

app.engine('handlebars', exphbs.engine());
app.set('view engine', 'handlebars');
app.set('views', './views');

app.get('/',function(err,res) {
    res.render('home', {})
})


app.use(express.static(path.join(__dirname, 'public')))
app.listen(PORT, () => console.log('Server listening on port: ' + PORT ))