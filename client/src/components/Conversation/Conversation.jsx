import "./Conversation.css";
import { useEffect,useContext,useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import Pusher from 'pusher-js';
import axios from 'axios';
export default function Conversation({conversation}) {
  const [lastMessage,setLastMessage]= useState("");
  const [conversationName,setConversationName]= useState("");
  const {user}= useContext(AuthContext);


  useEffect(()=>{
    const getLastMessage= async ()=>{
      try {
        const res = await axios.get("/messages/" + conversation._id+"/lastmsg");
        const data= res.data[0];
        setLastMessage(data==null ? " " : data.text);
        
      }
      catch (e) {
        console.log(e);
      }
    }
    getLastMessage();
  },[]);

  useEffect( ()=>{
    const guestUserName = conversation.members.find(member=>member !==user.username);
    const getConversationName= async ()=>{
      try{
          const res= await axios.get("/users/username/"+guestUserName);
          console.log(res.data,'  guestInfo');
          setConversationName(res.data.name);
      }
      catch(e){
        console.log(e);
      }
    }
    getConversationName();
  },[])

  useEffect(()=>{
    const pusher = new Pusher('64873375849c544489d1', {
      cluster: 'ap1'
    });

    const channel = pusher.subscribe('message');
    channel.bind('insert', function(data) {
      
      const newMessage = data.message;
      if(newMessage.conversationId ===conversation._id)
      {
        setLastMessage(newMessage==null ? " " : newMessage.text);
      }
      
    });

    return ()=>{
      channel.unbind('insert');
      channel.unsubscribe();
    }
  },[lastMessage]);

  return (
    <div className="conversation">
        <div className="conversationInfo">
        <img
          className="conversationImg"
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAA1BMVEUAAP+KeNJXAAAASElEQVR4nO3BgQAAAADDoPlTX+AIVQEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwDcaiAAFXD1ujAAAAAElFTkSuQmCC"
          alt=""
        />
        <div className="Info">
          <h1 className="room">{conversationName}</h1>
          
          <p className="messageText" >{lastMessage}</p>
        </div>
        </div>
    </div>
  );
}
