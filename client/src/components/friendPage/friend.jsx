import Friends from "../friends/friends";
import FriendViewer from "../friendViewer/friendViewer";
import LeftBar from "../leftbar/leftBar";
import "./friend.css";

export default function Friend() {
  return (
    <div className="friendPage">
        <LeftBar />
        <Friends />
        <FriendViewer />
      </div>
  );
}
