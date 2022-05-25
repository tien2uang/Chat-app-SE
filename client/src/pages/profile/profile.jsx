import React, { useContext, useState, useRef, useEffect } from "react";
import "./profile.css";
import { FaRegTimesCircle, FaUserCircle } from "react-icons/fa";
import { AuthContext } from "../../context/AuthContext";
import { FiEdit2 } from "react-icons/fi";
import axios from "axios";
export default function Profile() {
  const {user} = useContext(AuthContext);  
  const [modal, setModal] = useState(false);
  const [state, setState] = useState(false); 
  const[userFromDatabase, setUserFromDatabase] = useState(user);
  const [avatar, setAvatar] = useState(userFromDatabase.avatarURL);
  const username =useRef();
  const name = useRef();
  const password =useRef();


  useEffect(() => {
    const fetchUser = async () => {
      const res1 = await axios.get("/users/" + user._id, user);
      setUserFromDatabase(res1.data);
    };
    fetchUser();
  }, []);


  const postPicture = (pic) => {
    if (pic === undefined) {
      console.log("Err");
      return;
    }

    const data = new FormData(); 
      data.append("file", pic); 
      data.append("upload_preset", "chat-app")
      data.append("cloud-name", "dmkdfrjpz"); 
      fetch("https://api.cloudinary.com/v1_1/dmkdfrjpz/image/upload", {
        method: "post",
        body: data,
      }).then((res) => res.json())
        .then(data => {
          setAvatar(data.url.toString()); 
        })
        .catch((err) => {
          console.log(err);
        })
  }

  const handleSave = async (e) => {
    e.preventDefault();
    const userUpdate = {
      username: username.current.value,
      name: name.current.value,
      password: password.current.value,
      friends: user.friends,
      avatarURL: avatar
    };

    try {
      const res= await axios.put("/users/" + user._id, userUpdate);
      // console.log(res.data.status);
      // console.log(res.data); 
      setUserFromDatabase(userUpdate);
      setModal(false); 
      setState(false); 
    } catch(err) {
      console.log(err);
    }
  }


  const toggleModal = () => {
    setModal(!modal);
  };

  const toggleState = () => {
    setModal(!modal);
    setState(!state);
  };

  

  return (
    <>
      <button
        className="tab__1__list-items"
        title="Thông tin"
        onClick={toggleModal}
      >
        <img
          src= {userFromDatabase.avatarURL}
          alt=""
          className="profilePicture"
        />
      </button>
      {modal && (
        <div className="modal">
          <div onClick={toggleModal} className="overlay"></div>
          <div className="modal-content">
            <div className="profilePictureWrapper">
              <img
                src={userFromDatabase.avatarURL}
                alt=""
                className="profilePicturePop"
              />
            </div>
            <h3>User Name: {userFromDatabase.username}</h3>
            <h3>Name: {userFromDatabase.name}</h3>
            <h3>Friends: {userFromDatabase.friends.length}</h3>
            <div className="editButtonWrapper">
              <FiEdit2 />
              <button className="editButton" onClick={toggleState}>
                Edit here!
              </button>
            </div>
            <button className="close-modal" onClick={toggleModal}>
              <FaRegTimesCircle className="exit" />
            </button>
          </div>
        </div>
      )}
      {state && (
        <div className="modal">
          <div onClick={toggleState} className="overlay"></div>
          <div className="modal-content">
            <div className="profilePictureWrapper">
              <label htmlFor="input" className="inputfile">
                <img
                  src={userFromDatabase.avatarURL}
                  alt=""
                  className="profilePicturePop"
                />
              </label>
              <input
                type="file"
                className="inputFile"
                name="input"
                id="input"
                onChange={(e) => postPicture(e.target.files[0])}
              />
            </div>
            <div className="saveWrapper">
              <form className="editForm">
                <div className="editField">
                  <label className="inputFieldName">UserName</label>
                  <input
                    placeholder="Username"
                    defaultValue={userFromDatabase.username}
                    className="field"
                    type="text"
                    ref={username}
                  />
                </div>
                <div className="editField">
                  <label className="inputFieldName">Name</label>
                  <input
                    placeholder="Name"
                    defaultValue={userFromDatabase.name}
                    className="field"
                    type="text"
                    ref={name}
                  />
                </div>
                <div className="editField">
                  <label className="inputFieldName">Password</label>
                  <input
                    placeholder="Password"
                    defaultValue={userFromDatabase.password}
                    className="field"
                    type="password"
                    ref={password}
                  />
                </div>
                <button className="saveButton" type="submit" onClick={handleSave}>
                  Save
                </button>
              </form>
            </div>
            <button className="close-modal" onClick={toggleState}>
              <FaRegTimesCircle className="exit" />
            </button>
          </div>
        </div>
      )}
    </>
  );
}
