import "./leftBar.css";
import { BsFillChatFill } from "react-icons/bs";
import { FaUserFriends, FaSignOutAlt } from "react-icons/fa";
import Profile from "../profile/profile";

export default function LeftBar() {
  return (
    <div class="tab__1">
      <div class="tab__1__list">
        <button class="tab__1__list-items" title="Tin nhắn" onClick={() => {window.location.href = "http://localhost:3000"}}>
          <BsFillChatFill className="items" />
        </button>
        <button class="tab__1__list-items" title="Bạn bè" onClick={() => {window.location.href = "http://localhost:3000/friend"}}>
          <FaUserFriends className="items" />
        </button>
        <Profile />
        <button class="tab__1__list-items" title="Thoát" onClick={() => {window.location.href = "http://localhost:3000/signIn"}}>
          <FaSignOutAlt className="items" />
        </button>
      </div>
    </div>
  );
}
