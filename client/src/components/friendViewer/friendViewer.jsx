import "./friendViewer.css"
import FriendNotifications from "../friendNotifications/friendNotifications";
import { useState, useEffect } from "react";

export default function FriendViewer() {

    const [noti, setNoti] = useState(true);
    const friends = [
        {name: "Quyet"},
        {name: "Nam"},
        {name: "Huy"}
    ]

    // useEffect(() => {
    //     const checkNoti = async () => {
    //         if(friends.length === 0) {
    //             setNoti(false);
    //             console.log("mang rong");
    //         } else {
    //             console.log("mang ko rong");
    //             setNoti(true);
    //         }
    //         checkNoti();
    //         console.log("checkNoti");
    //     }
    // },)

    const checkNoti = () => {
        return friends.length !== 0
    }

    console.log(checkNoti());
    return (
        <div className="friendViewer">
            <div className="friendsRequest">
                <h1 className="header1">Lời mời kết bạn</h1>
        
                {checkNoti()? <>{
                            friends.map(function(name, key) {
                                return <FriendNotifications name={name} key={key}/>
                            })
                        }</>
                    : <h2 className="noFriendsRequest">Không có lời mời kết bạn nào</h2>}
            </div>

                <h3 className="header2">Gợi ý kết bạn</h3>
            <div className="friendSuggestions">

                <div className="friendItems">
                    <img className="avatar" src = "https://th.bing.com/th/id/R.a3c3ea5bba06fc407424effa07631de1?rik=PnSmjy3pdWOBsA&pid=ImgRaw&r=0" alt = "img"></img>  
                    <div className="name">Andy</div>
                    <button className="addFriendButton">Add Friend</button>
                </div>
                <div className="friendItems">
                    <img className="avatar" src = "https://th.bing.com/th/id/R.a3c3ea5bba06fc407424effa07631de1?rik=PnSmjy3pdWOBsA&pid=ImgRaw&r=0" alt = "img"></img>  
                    <div className="name">Andy</div>
                    <button className="addFriendButton">Add Friend</button>
                </div>
                <div className="friendItems">
                    <img className="avatar" src = "https://th.bing.com/th/id/R.a3c3ea5bba06fc407424effa07631de1?rik=PnSmjy3pdWOBsA&pid=ImgRaw&r=0" alt = "img"></img>  
                    <div className="name">Andy</div>
                    <button className="addFriendButton">Add Friend</button>
                </div>
                <div className="friendItems">
                    <img className="avatar" src = "https://th.bing.com/th/id/R.a3c3ea5bba06fc407424effa07631de1?rik=PnSmjy3pdWOBsA&pid=ImgRaw&r=0" alt = "img"></img>  
                    <div className="name">Andy</div>
                    <button className="addFriendButton">Add Friend</button>
                </div>
                <div className="friendItems">
                    <img className="avatar" src = "https://th.bing.com/th/id/R.a3c3ea5bba06fc407424effa07631de1?rik=PnSmjy3pdWOBsA&pid=ImgRaw&r=0" alt = "img"></img>  
                    <div className="name">Andy</div>
                    <button className="addFriendButton">Add Friend</button>
                </div>
                <div className="friendItems">
                    <img className="avatar" src = "https://th.bing.com/th/id/R.a3c3ea5bba06fc407424effa07631de1?rik=PnSmjy3pdWOBsA&pid=ImgRaw&r=0" alt = "img"></img>  
                    <div className="name">Andy</div>
                    <button className="addFriendButton">Add Friend</button>
                </div>
                <div className="friendItems">
                    <img className="avatar" src = "https://th.bing.com/th/id/R.a3c3ea5bba06fc407424effa07631de1?rik=PnSmjy3pdWOBsA&pid=ImgRaw&r=0" alt = "img"></img>  
                    <div className="name">Andy</div>
                    <button className="addFriendButton">Add Friend</button>
                </div>
                <div className="friendItems">
                    <img className="avatar" src = "https://th.bing.com/th/id/R.a3c3ea5bba06fc407424effa07631de1?rik=PnSmjy3pdWOBsA&pid=ImgRaw&r=0" alt = "img"></img>  
                    <div className="name">Andy</div>
                    <button className="addFriendButton">Add Friend</button>
                </div>

            </div>
        </div>
    );
}