import "./message.css"

export default function Message({recievingMessage}) {
    return (
        <div className= {recievingMessage ? "message recievingMessage" : "message"}>
            <div className="messageTop">
                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAA1BMVEUAAP+KeNJXAAAASElEQVR4nO3BgQAAAADDoPlTX+AIVQEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwDcaiAAFXD1ujAAAAAElFTkSuQmCC" 
                alt="This is image message" 
                className="messageImg" />
                <p className="messageContent">Hello this first message</p>
            </div>
            <div className= {recievingMessage ? "messageBottomRecieving" : "messageBottomSending"}>Just now</div>
        </div>
    );
}