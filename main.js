const express = require('express');
const app = express();
const path = require('path');
const port = 8070;
const db = require('./db.connect');
const mainController = require('./controllers/mainController');

app.use(express.urlencoded({ extended: true }));
app.set('view engine', 'ejs'); 
app.set('views', path.join(__dirname, 'views'));

app.get('/', (req, res) =>{
    res.sendFile(path.join(__dirname, `views`, `create.html`));
})

app.post('/store', mainController.store);

app.listen(port, () => {
    console.log('Server iniciado com sucesso.');    
})