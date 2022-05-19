import { useContext } from "react";
import {AuthContext} from "../../context/AuthContext";
import "./friends.css";
import FriendList from "../friendList/friendList";

export default function Friends() {

  const {user} = useContext(AuthContext);
  
  return (
    <div className="tab__2">
      <div className="tab__2__wrapper">
          <input placeholder="Search for your friends" className="friendChatMenu" />
          <div className="conversations">
            {
              user.friends.map(function(friendId, key) {
                return <FriendList friendId={friendId} key={key}/>
              })
            }
      
          </div>
      </div>
    </div>
  );
}
