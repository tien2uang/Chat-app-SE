const user = require('../model/User');

const login_index = (req, res) => {
    res.render('log-in', {anoucement: 'log-in'});
}

const signup_index = (req, res) => {
    res.render('sign-up', {anoucement: 'sign-up'});
}

const signup_post = (req, res) => {
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
}

const login_post = (req, res) => {
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
}

module.exports = {
    login_index,
    signup_index,
    signup_post,
    login_post
}