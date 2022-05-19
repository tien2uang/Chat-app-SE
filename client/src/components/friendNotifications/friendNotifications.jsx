import { useState } from "react";
import "./friendNotifications.css";


export default function FriendNotifications({name}){
    const [accept, setAccept] = useState(false);
    const [status, setStatus] = useState(true);

    const delay = ms => new Promise(
        resolve => setTimeout(resolve, ms)
    );

    const handleAccept = async Event => {
        setAccept(true)
        await delay(1000)
        setStatus(false)
        console.log("accept");
    }

    const handleRefuse = () => {
        setStatus(false)
        console.log("refuse");
    }

    
    return(
        <>
        {status &&
        <div className="notifications">
            <div className="userWrapper">
                <img 
                    className="avatarUser"
                    src="https://th.bing.com/th/id/R.a3c3ea5bba06fc407424effa07631de1?rik=PnSmjy3pdWOBsA&pid=ImgRaw&r=0" 
                    alt="" 
                    />
                <h1 className="nameUser">{name?.name} đã gửi cho bạn lời mời kết bạn</h1>
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