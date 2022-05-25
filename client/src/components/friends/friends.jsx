import { useContext, useEffect, useState } from "react";
import {AuthContext} from "../../context/AuthContext";
import FriendList from "../friendList/friendList";
import "./friends.css";
import axios from "axios";

export default function Friends() {

  const {user} = useContext(AuthContext);
  const [status, setStatus] = useState(true);
  const [searchResult, setSearchResult] = useState([]);
  const [currentUser, setCurrentUser] = useState([]);

  useEffect(() => {
    const getFriendInfo = async () => {

      try {
        const res = await axios.get("/users/" + user._id + "/friends")
        setCurrentUser(res.data)
      } catch (error) {
        console.log(error);
      }
    }
    getFriendInfo();
  },[])

  const search = async (e) => {
    if(e.target.value.length !==0) {
      
      try {
        const res = await axios.get("/users/" + user._id + "/friends")
        const friends = res.data;
        const filteredFriend = friends.filter(friend => 
           friend.name.includes(e.target.value)
        )
        console.log(filteredFriend);
        
        setSearchResult(filteredFriend);
  
      } catch (error) {
        console.log(error);
      }

      setStatus(false)
    } else {
      setStatus(true);
    }
  };
  
  return (
    <div className="friendList">
      <div className="friendListWrapper">
        <input  
              className="inputSearch" 
              placeholder="Search for your friends"
              onChange={search}
        />
        <button className="addFriend" title="thêm bạn bè">add</button>

          {status?
            <div className="friends">
            {
              currentUser.map(function(friend, key) {
                return <FriendList friendId={friend.id} key={key}/>
              })
            }
          </div> 
          : <>{searchResult.length === 0? <div className="noResult">No result</div> 
              : <div className="friends">
                  {
                    searchResult.map(function(friend, key) {
                      return <FriendList friendId={friend.id} key={key}/>
                    })
                  }
                </div>
              }</>}
      </div>
    </div>
  );
}
