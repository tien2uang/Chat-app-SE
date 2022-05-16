import { useEffect, useState } from "react";
import "./Conversation.css";
import axios from "axios";

export default function Conversation({friendId}) {

  const [user, setUser] = useState(null);

  useEffect(() => {
    const getFriendInfo = async () => {
      try {
        const res = await axios.get("/users/" + friendId)
        setUser(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getFriendInfo();
  })

  



  return (
    <div className="conversation">
        <div className="conversationInfo">
        <img
          className="conversationImg"
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAA1BMVEUAAP+KeNJXAAAASElEQVR4nO3BgQAAAADDoPlTX+AIVQEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwDcaiAAFXD1ujAAAAAElFTkSuQmCC"
          alt=""
        />
        <div className="Info">
          <h1 className="room">{user?.name}</h1>
          <p className="messageText">This is the last message</p>
        </div>
        </div>
    </div>
  );
}
