const User = require('../model/User');

class UserController {
    async addUser(req, res) {
        const testData = {
            username: "tq2002",
            name: "Quang",
            password: "12345",
            friends: ["Quna", "Yepp"]
        }
        const newUser = new User(testData);
        try {
            let savedUser = newUser.save();
            res.json(savedUser.data);
        } catch (err) {
            console.log(err);
        }
    }

    async getUserInfomation(req, res) {
        const id = req.params.id;
        try {
            const userInfomation = await User.findById(id);
            res.json(userInfomation);
        } catch (err) {
            console.log(err);
        }
    }

    async getFriends(req, res) {
        const id = req.params.id;


        try {
            const userInfomation = await User.findById(id);
            const friends = await Promise.all(
                userInfomation.friends.map(friendId => {
                    return User.findById(friendId);
                })
            )
            const friendsList = [];
            friends.map((friend) => {
                let temp = {
                    id: friend.id,
                    name: friend.name
                };
                friendsList.push(temp)
            });
            res.json(friendsList);
        } catch (err) {
            console.log(err);
        }
    }

    async addFriend(req, res) {
        const userId = req.params.id;

    }

    async delelteFriend(req, res) {

    }
}

module.exports = new UserController;