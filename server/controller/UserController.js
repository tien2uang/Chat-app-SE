const User = require('../model/User');

class UserController {
    async add(req, res) {

    }

    async infomation(req, res) {
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
        const userId= req.params.id;
        const temp
    }

    async delelteFriend(req, res) {

    }
}

module.exports = UserController;