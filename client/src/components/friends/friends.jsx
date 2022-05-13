import Conversation from "../Conversation/Conversation";
import "./friends.css";

export default function Friends() {
  return (
    <div class="tab__2">
      <div className="tab__2__wrapper">
          <input placeholder="Search for your friends" className="friendChatMenu" />
          <div className="conversations">
            <Conversation />
            <Conversation />
          </div>
      </div>
    </div>
  );
}
