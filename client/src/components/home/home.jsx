import "./home.css"
import LeftBar from "../leftbar/leftBar";
import Friends from "../friends/friends";
import Messenger from "../messenger/messenger";

export default function Home() {
    return (
        <div className="tab">
            <LeftBar />
            <Friends />
            <Messenger />
        </div>
    );
}