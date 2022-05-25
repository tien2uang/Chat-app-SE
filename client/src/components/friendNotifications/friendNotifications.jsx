import axios from "axios";
import { useEffect, useState } from "react";
import "./friendNotifications.css";


export default function FriendNotifications({invitation, currentUser}){
    const [accept, setAccept] = useState(false);
    const [status, setStatus] = useState(true);
    const [user, setUser] = useState([]);

    useEffect(() => {
        const getInfoUser = async () => {
            try {
                const res = await axios.get("/users/" + invitation.sender)
                setUser(res.data)
            } catch (error) {
                console.log(error);
            }
        }
        getInfoUser();
    },[])

    
    const delay = ms => new Promise(
        resolve => setTimeout(resolve, ms)
    );

    const handleAccept = async (Event) => { 
        try {
            const res = await axios.delete("/invitations/delete/accept/" + invitation._id)
        } catch (error) {
            console.log(error);
        }
        setAccept(true)
        await delay(1000)
        setStatus(false)
        console.log("accept");
    }

    const handleRefuse = async () => {
        const res = await axios.delete("/invitations/delete/refuse/" + invitation._id)
        setStatus(false)
        console.log("refuse");
    }

    console.log(currentUser);

    return(
        <>
        {status &&
        <div className="notifications">
            <div className="userWrapper">
                <img 
                    className="avatarUser"
                    src={user.avatarURL} 
                    alt="" 
                />
                <h1 className="nameUser">{user?.name} đã gửi cho bạn lời mời kết bạn</h1>
             </div>

            {!accept? 
            <div className="decision" >
                <button className="accept" onClick={handleAccept}>accept</button>
                <button className="refuse" onClick={handleRefuse}>refuse</button>
            </div> 
            : <div className="accepted">
                <h2>Accepted the friend request!</h2>
            </div>}

        </div> }
        </>
    )
}