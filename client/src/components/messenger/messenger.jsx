import "./messenger.css";
import { FaPaperPlane } from "react-icons/fa";
import Message from "../message/message";

/* FaSmile */

export default function Messenger() {
  return (
    <div className="tab__3">
      <div className="chat_header">
        <div className="user">
          <div className="user_avatar">
            <img
              className="user_avatar"
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAA1BMVEUAAP+KeNJXAAAASElEQVR4nO3BgQAAAADDoPlTX+AIVQEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwDcaiAAFXD1ujAAAAAElFTkSuQmCC"
              alt=""
            />
          </div>

          <div className="user_name">
            <h2 className="user_name">room name</h2>
          </div>
        </div>
      </div>

      <div className="chat_masseages">
          <Message />
          <Message recievingMessage={true} />
          <Message />
          <Message recievingMessage={true} />
          <Message />
          <Message recievingMessage={true} />
          <Message />
          <Message recievingMessage={true} />
          <Message />
          <Message recievingMessage={true} />
          <Message />
          <Message recievingMessage={true} />
          <Message />
          <Message />
      </div>

      <div className="chat_input">
        <div className="chat_input_wrapper">
          <input type="text" className="input" placeholder="Nhập tin nhắn..." />
        </div>

        <button className="send" title="Gửi">
          <FaPaperPlane className="send_icon" />
        </button>
      </div>
    </div>
  );
}
