import "./leftBar.css"
import { BsFillChatFill } from "react-icons/bs";
import { FaUserFriends, FaUserCircle, FaSignOutAlt } from "react-icons/fa";


export default function LeftBar() {
    return (
        <div class="tab__1">
                    <div class="tab__1__list">
                        <button class="tab__1__list-items" title="Tin nhắn">
                            <a href="">
                                <BsFillChatFill className="items" />
                            </a>
                        </button>
                        <button class="tab__1__list-items" title="Bạn bè">
                            <a href="">
                                <FaUserFriends className="items" />
                            </a>
                        </button>
                        <button class="tab__1__list-items" title="Thông tin">
                            <a href="">
                                <FaUserCircle className="items" />
                            </a>
                        </button>
                        <button class="tab__1__list-items" title="Thoát">
                            <a href="http://localhost:3000/signIn">
                                <FaSignOutAlt className="items" />
                            </a>
                        </button>
                    </div>
        </div>
    );
}