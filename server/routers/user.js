const UserController = require('../controller/UserController');

const router = express.Router();

router.post('/add', UserController.addUser);

router.get('/:id', UserController.getUserInfomation);
router.get("/:id/friends", UserController.getFriends);

module.exports = router;