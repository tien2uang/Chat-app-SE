import "./friSuggestItem.css";
import axios from "axios";
import { useState } from "react";

export default function FriSuggestItem({userSuggest, currentUser}) {

    const [status, setStatus] = useState(true);
    const [addFriend, setAddFriend] = useState(false);


    const delay = ms => new Promise(
        resolve => setTimeout(resolve, ms)
    );

    const handleAddFriend = async () => {
        const invitation = {
            sender: userSuggest._id,
            receiver: currentUser._id
        }
        try {
            const res = await axios.post("/invitations/add", invitation)
        } catch (error) {
            console.log(error);
        }
        setAddFriend(true)
        await delay(1000)
        setStatus(false)
    }

    return(<>{ status &&
        <div className="friendItems">
                <img className="avatar" src ={userSuggest.avatarURL} alt = "img"></img>  
                <div className="name">{userSuggest?.username}</div>
                {!addFriend? <button className="addFriendButton" onClick={handleAddFriend}>Add Friend</button> 
                    : <h1>Request Success!</h1>}
        </div>
    }</>)
}