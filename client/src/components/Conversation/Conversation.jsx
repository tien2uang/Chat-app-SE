import { useEffect, useState } from "react";
import "./Conversation.css";
<<<<<<< HEAD
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
=======
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

  


>>>>>>> 3d5b275394afd45b1a0ef6ec36e053ce3ad5992a

  return (
    <div className="conversation">
        <div className="conversationInfo">
        <img
          className="conversationImg"
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAA1BMVEUAAP+KeNJXAAAASElEQVR4nO3BgQAAAADDoPlTX+AIVQEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwDcaiAAFXD1ujAAAAAElFTkSuQmCC"
          alt=""
        />
        <div className="Info">
<<<<<<< HEAD
          <h1 className="room">{conversationName}</h1>
          
          <p className="messageText" >{lastMessage}</p>
=======
          <h1 className="room">{user?.name}</h1>
          <p className="messageText">This is the last message</p>
>>>>>>> 3d5b275394afd45b1a0ef6ec36e053ce3ad5992a
        </div>
        </div>
    </div>
  );
}
