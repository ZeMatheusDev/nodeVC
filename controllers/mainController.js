const db = require('../db.connect'); 
const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname, '..', 'views')));

app.set('view engine', 'ejs'); 

exports.store = (req, res) => {
    const { login, senha, email } = req.body;
    const verificacao = `select * from contas where login = '${login}'`;
    var verificado = db.query(verificacao);
    db.query(verificacao, [login], (err, results) => {
        if(results == ''){
            const sql = `INSERT INTO contas (login, senha, email) VALUES ('${login}', '${senha}', '${email}')`;
            db.query(sql, [login, senha, email], (err, result) => {
                if (err) {
                    console.log(err);
                    
                    return res.status(500).send('Erro ao salvar os dados.');
                }
            });
        }
    });
    const contas = `select * from contas`;
    db.query(contas, (err, results) => {
        res.render('index', {contas: results});       
    });
    
};