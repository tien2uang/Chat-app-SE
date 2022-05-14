const user = require('../model/User');


const signup_post = (req, res) => {
    const username = req.body.username;
    user.findOne({ username: username })
        .then((oneuser) => {
            if (oneuser !== null) {
                res.json({ status: 'this username has already taken' })
            } else {
                const newUser = new user(req.body);
                newUser.save()
                    .then(() => res.json({ status: 'success sign up' }))
                    .catch((err) => console.log(err))
            }
        })
        .catch(err => console.log(err));
}

const login_post = (req, res) => {
        const username = req.body.username;

        user.findOne({ username: username })
            .then((oneuser) => {
                if (oneuser !== null) {
                    if (oneuser.password !== req.body.password) {
                        res.json({ status: 'wrong password' })
                    } else {
                        res.json({ username: req.body.username })
                    }
                } else {
                    res.json({ status: 'dont have this account' })
                }
            })
            .catch(err => console.log(err));
    }
    // const login_index = (req, res) => {
    //     res.render('log-in', { anoucement: 'log-in' });
    // }

// const signup_index = (req, res) => {
//     res.render('sign-up', { anoucement: 'sign-up' });
// }
module.exports = {
    signup_post,
    login_post
}