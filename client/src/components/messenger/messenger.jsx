import "./messenger.css";
import { FaPaperPlane } from "react-icons/fa";
import Message from "../message/message";
import Conversation from "../Conversation/Conversation";
import { useEffect,useContext,useState,useRef } from "react";
import { AuthContext } from "../../context/AuthContext";
import axios from 'axios';
import Pusher from 'pusher-js';
/* FaSmile */

export default function Messenger() {


  const {user}= useContext(AuthContext);
  const [conversations,setConversations]= useState([]);
  const [currentChat,setCurrentChat]= useState(null);
  const [currentChatName,setCurrentChatName]=useState(null);
  const [messages,setMessages]= useState([]);
  const [inputText,setInputText]= useState("");
  const scrollRef = useRef();
  var userConversations= [];
  

  const sendMessage = async (e)=>{
    e.preventDefault();
    const message = {
      conversationId: currentChat?._id,
      sender: user._id,
      text: inputText
    }
    try {
      const res= await axios.post("/messages/",message);
      console.log(res.data);
      setInputText("");
      scrollRef.current?.scrollIntoView({ behavior: "smooth" });
    }
    catch (e) {
      console.log(e);
    }
  };
  
  const search =async (e)=>{
    console.log("change")
    console.log(e.target.value);
    
    try {
      console.log(user.username);
      const res = await axios.get("/conversations/" + user.username);
      userConversations=res.data;
      const filteredConversations = userConversations.filter(conversation =>{
        const members = conversation.members;
        const filteredMembers = members.filter(member =>member.includes(e.target.value)&&member!==user.username);
        return filteredMembers.length>0 ;
      })
      console.log(filteredConversations);
      
      setConversations(filteredConversations);
    } catch (err) {
      console.log(err);
    }
    
    
  }

  
  useEffect(() => {
    const getConversations = async () => {
      try {
        console.log(user.username);
        const res = await axios.get("/conversations/" + user.username);
        userConversations=res.data;
        console.log(userConversations);
        setConversations(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getConversations();
  },[user._id]);

  useEffect(()=>{
    const pusher = new Pusher('64873375849c544489d1', {
      cluster: 'ap1'
    });

    const channel = pusher.subscribe('message');
    channel.bind('insert', function(data) {
     
      const newMessage = data.message;
      if(newMessage.conversationId==currentChat._id){
        setMessages([...messages,data.message]);
      }
      
     
      
    });

    return ()=>{
      channel.unbind('insert');
      channel.unsubscribe();
    }
  },[messages]);

  useEffect(()=>{
  
    
    const getConversationName= async ()=>{
     try{
        if(currentChat!=null){
          const guestUserName = currentChat.members.find(member=>member !==user.username);
          const res= await axios.get("/users/username/"+guestUserName);
          
          
          setCurrentChatName(res.data.name);
        }
      }
      catch(e){
       console.log(e);
      }
    } 
   
    const getMessages= async()=>{
      try{
        if(currentChat!= null){
          const res= await  axios.get("/messages/"+currentChat._id);
          setMessages(res.data);
        }
      }
      catch (err) {
        console.log(err);
      }
    }
    getConversationName();
    getMessages();
    
  },[currentChat]);


  useEffect(() => {
    scrollRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  

  
  return (

    <>
    <div className="tab__2">
      <div className="tab__2__wrapper">
          <input placeholder="Search for your conversation" className="friendChatMenu" onChange={search} />
          <div className="conversations">
            {conversations.map((c) => (
              <div onClick={() => setCurrentChat(c)} key={c._id}>
                <Conversation conversation={c}  />
              </div>
            ))}
            
          </div>
      </div>
    </div>



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
          {currentChat==null ?
            <div className="user_name">
              <h2 className="user_name">Khong co conversation</h2>
            </div>
          : <div className="user_name">
              <h2 className="user_name">{currentChatName}</h2>
            </div>}
          
        </div>
      </div>

          {currentChat!=null ?
            (<div className="chat_masseages">
            
            {messages.map((m,index) =>(
              
              <div ref={scrollRef} key={m._id} >
                
                <Message message={m} own={m.sender === user._id}  />
              </div>
            
            )
                
            )}
           </div>)
          : (<div className="chat_masseages">
              <h1>Khong co cuoc hoi thoai</h1>
            </div>)}
     

      <div className="chat_input">
        <form action="">
          <div className="chat_input_wrapper">
            <input
             value={inputText} 
             type="text" 
             className="input" 
             placeholder="Nhập tin nhắn..." 
             onChange={(e)=>(setInputText(e.target.value))} />
          </div>

          <button className="send" title="Gửi" type="submit" onClick={sendMessage}>
            <FaPaperPlane className="send_icon" />
          </button>
        </form>
        
      </div>
    </div>
  </>
  )
};
