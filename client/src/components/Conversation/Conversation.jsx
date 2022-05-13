import "./Conversation.css";

export default function Conversation() {
  return (
    <div className="conversation">
        <div className="conversationInfo">
        <img
          className="conversationImg"
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAA1BMVEUAAP+KeNJXAAAASElEQVR4nO3BgQAAAADDoPlTX+AIVQEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwDcaiAAFXD1ujAAAAAElFTkSuQmCC"
          alt=""
        />
        <div className="Info">
          <h1 className="room">room name</h1>
          <p className="messageText">This is the last message</p>
        </div>
        </div>
    </div>
  );
}
