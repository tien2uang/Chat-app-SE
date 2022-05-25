import { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import "./friends.css";
import FriendList from "../friendList/friendList";
import { AiOutlineUserAdd } from "react-icons/ai";
import {FaRegTimesCircle} from "react-icons/fa"
export default function Friends() {
  const { user } = useContext(AuthContext);
  const [addFriend, setAddFriend] = useState(false);

  return (
    <div className="tab__2">
      <div className="tab__2__wrapper">
        <div className="addFriendsWrapper">
          <h4 className="friensTitle">Friends</h4>
          <button
            className="addFriendsButton"
            onClick={() => setAddFriend(!addFriend)}
          >
            <AiOutlineUserAdd />
          </button>
        </div>
        {addFriend && (
          <div className="modal">
            <div
              onClick={() => setAddFriend(!addFriend)}
              className="overlay"
            ></div>
            <div className="modal-content">
              <div className="userSearchField">
                <input
                  placeholder="Tìm kiếm người dùng"
                  className="userSearchForAdd"
                />
              </div>
              <div className="listUsers"></div>
            </div>
          </div>
        )}
        <div className="friendSearchField">
          <input
            placeholder="Search for your friends"
            className="friendChatMenu"
          />
        </div>
        <div className="conversations">
          {user.friends.map(function (friendId, key) {
            return <FriendList friendId={friendId} key={key} />;
          })}
        </div>
      </div>
    </div>
  );
}
