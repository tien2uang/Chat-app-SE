import "./messenger.css"
import { FaSmile, FaPaperPlane } from "react-icons/fa";

export default function Messenger() {
    return (
        <div class="tab__3">
            <div class="tab__3_infoChat">

            </div>
            <div class="tab__3_list">
                <li class="tab__3_list-items"></li>
                <li class="tab__3_list-items"></li>
                <li class="tab__3_list-items"></li>
            </div>

            <div class="tab__3_inputChat">
                <input class="input_chat" type="text" placeholder="Nhập tin nhắn..." />
                        
                <button class="icon">
                    <FaSmile className="itemsChat" />
                </button>

                <button class="send">
                    <FaPaperPlane className = "itemsChat" />
                </button>
            </div>
        </div>
    );
}