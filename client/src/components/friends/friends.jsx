import { useContext } from "react";
import Conversation from "../Conversation/Conversation";
import {AuthContext} from "../../context/AuthContext";
import "./friends.css";

export default function Friends() {

  const {user} = useContext(AuthContext);
  
  return (
    <div className="tab__2">
      <div className="tab__2__wrapper">
          <input placeholder="Search for your friends" className="friendChatMenu" />
          <div className="conversations">
            {
              user.friends.map(function(friendId) {
                return <Conversation friendId={friendId} />
              })
            }
          </div>
      </div>
    </div>
  );
}
