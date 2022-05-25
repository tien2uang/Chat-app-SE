import "./friendViewer.css"
import FriendNotifications from "../friendNotifications/friendNotifications";
import FriSuggestItem from "../friSuggestItem/friSuggestItem"
import { useState, useEffect, useContext } from "react";
import axios from "axios";
import { AuthContext } from "../../context/AuthContext";

export default function FriendViewer() {

    const {user} = useContext(AuthContext);
    const [friSuggestion, setFriSuggestion] = useState([]);
    const [allUser, setAllUser] = useState([]);
    const [friendList, setFriendList] = useState([]);
    const [invitation, setInvitation] = useState([]);


    useEffect(() => {
        const getFriendList = async () => {
          try {
            const res = await axios.get("/users/" + user._id + "/friends")
            setFriendList(res.data)
          } catch (error) {
            console.log(error);
          }
        }
        getFriendList();
    },[])

// 6287681a4125ed94d4dd8fce nam
// 628604fc83fe10c734755c85 hoan
//6287a90171b25f4dc7487bb0 quang
    useEffect(() => {
        const getFriendSuggestion = async () => {
           try {
               const res = await axios.get("/users/" + user._id + "/fr-suggestion")
               setAllUser(res.data)
           } catch (error) {
               console.log(error);
           }
        }
        getFriendSuggestion();

    },[])
    
    useEffect(() => {
        if(allUser.length > 0 && friendList.length > 0) {
            const userSuggest = allUser.filter(userSug => {
               const findInFriend = friendList.findIndex(fri =>
                    fri.id === userSug._id
                )
               return findInFriend < 0
            })
            setFriSuggestion(userSuggest)
        }
    },[allUser, friendList])

    // console.log(user, "user");
    // console.log(allUser, "all user");
    // console.log(friendList, "friend");
    // console.log(friSuggestion, "suggest");
    useEffect(() => {
        const getInvitation = async () => {
            try {
                const res = await axios.get("/invitations/" + user._id)
                setInvitation(res.data)
            } catch (error) {
                console.log(error);
            }
        }
        getInvitation();
    },[])



    return (
        <div className="friendViewer">
            <div className="friendsRequest">
                <h1 className="header1">Lời mời kết bạn</h1>
        
                {invitation.length > 0? <>{
                            invitation.map(function(invitation, key) {
                                return <FriendNotifications invitation={invitation} currentUser={user} key={key}/>
                            })
                        }</>
                    : <h2 className="noFriendsRequest">Không có lời mời kết bạn nào</h2>}
            </div>

            <h3 className="header2">Gợi ý kết bạn</h3>
            <div className="friendSuggestions">
                {friSuggestion.length > 0? <>{
                    friSuggestion.map(function(userSuggest, key) {
                        return <FriSuggestItem userSuggest={userSuggest} currentUser={user} key={key} />
                    })
                }</> : null}
            </div>
        </div>
    );
}