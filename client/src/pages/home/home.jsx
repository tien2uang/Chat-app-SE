import "./home.css"
import LeftBar from "../../components/leftbar/leftBar";
import Friends from "../../components/friends/friends";
import Messenger from "../../components/messenger/messenger";
import ChatMenu from "../../components/ChatMenu/chatMenu";

export default function Home() {
    return (
        <div className="tab">
            <LeftBar />          
            <Messenger />
        </div>
    );
}