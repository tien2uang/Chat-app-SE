const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const user = require('./user');

const app = express();

app.listen(3000);

app.set('view engine', 'ejs');

app.use(morgan('dev'));
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

const dbURI = 'mongodb+srv://hfghfg123456:hfghfg123456@profile.hxemy.mongodb.net/Database?retryWrites=true&w=majority';
mongoose.connect(dbURI)
    .then((result) => console.log('connected'))
    .catch((err) => console.log(err));

app.get('/', (req, res) => {
    res.render('home');
})

app.get('/sign-up', (req, res) => {
    res.render('sign-up', {anoucement: 'sign-up'});
})

app.get('/log-in', (req, res) => {
    res.render('log-in', {anoucement: 'log-in'});
})

app.post('/sign-up', (req, res) => {
    const username = req.body.username;
    user.findOne({username: username})
        .then((oneuser) => {
            if (oneuser !== null) {
                res.render('sign-up', {anoucement: 'this username has already taken'})
            } else {
                const newUser = new user(req.body);
                newUser.save()
                    .then(res.redirect('/'))
                    .catch((err) => console.log(err));
            }
        })
        .catch(err => console.log(err));
});


app.post('/log-in', (req, res) => {
    const username = req.body.username;
    user.findOne({username: username})
        .then((oneuser) => {
            if (oneuser !== null) {
                if (oneuser.password !== req.body.password) {
                    res.render('log-in', {anoucement: 'wrong password'})
                } else {
                    res.render('log-in', {anoucement: 'login success'})
                }
            } else {
                res.render('log-in', {anoucement: 'dont have this account'})
            }
        })
        .catch(err => console.log(err));
}) 


