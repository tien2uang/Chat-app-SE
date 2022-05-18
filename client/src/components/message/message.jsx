import "./message.css"
import {format} from "timeago.js"
export default function Message({message,own}) {
    return (
        <div className= {own ? "message recievingMessage" : "message"}>
            <div className="messageTop">
                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAA1BMVEUAAP+KeNJXAAAASElEQVR4nO3BgQAAAADDoPlTX+AIVQEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwDcaiAAFXD1ujAAAAAElFTkSuQmCC" 
                alt="This is image message" 
                className="messageImg" />
                <p className="messageContent">{message.text}</p>
            </div>
            <div className= {own ? "messageBottomRecieving" : "messageBottomSending"}>{format(message.createdAt)}</div>
        </div>
    );
}