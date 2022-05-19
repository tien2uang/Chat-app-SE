import React, { useContext, useState, useRef } from "react";
import "./profile.css";
import { FaRegTimesCircle, FaUserCircle } from "react-icons/fa";
import { AuthContext } from "../../context/AuthContext";
import { FiEdit2 } from "react-icons/fi";
import axios from "axios";
export default function Profile() {
  const {user} = useContext(AuthContext);  
  const [modal, setModal] = useState(false);
  const [state, setState] = useState(false);

  const[userFromDatabse, setUserFromDatabase] = useState(user); 
  const username =useRef();
  const name = useRef();
  const password =useRef();

  const handleSave = async (e) => {
    e.preventDefault();
    const userUpdate = {
      username: username.current.value,
      name: name.current.value,
      password: password.current.value,
      friends: user.friends,
      avatarURL:""
    };

    try {
      const res= await axios.put("/users/" + user._id, userUpdate);
      // console.log(res.data.status);
      // console.log(res.data); 
      const res1 = await axios.get("/users/" + user._id, user); 
      setUserFromDatabase(res1.data);
      setState(!state);
    } catch(err) {
      console.log(err);
    }
  }


  const toggleModal = () => {
    setModal(!modal);
  };

  const toggleState = () => {
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
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAA1BMVEUAAP+KeNJXAAAASElEQVR4nO3BgQAAAADDoPlTX+AIVQEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwDcaiAAFXD1ujAAAAAElFTkSuQmCC"
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
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAA1BMVEUAAP+KeNJXAAAASElEQVR4nO3BgQAAAADDoPlTX+AIVQEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwDcaiAAFXD1ujAAAAAElFTkSuQmCC"
                alt=""
                className="profilePicturePop"
              />
            </div>
            <h3>User Name: {userFromDatabse.username}</h3>
            <h3>Name: {userFromDatabse.name}</h3>
            <h3>Friends: {userFromDatabse.friends.length}</h3>
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
          <div onClick={toggleModal} className="overlay"></div>
          <div className="modal-content">
            <div className="profilePictureWrapper">
              <input
                type="file"
                className="inputFile"
                name="input"
                id="input"
              />
              <label htmlFor="input" className="inputfile">
                <img
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAA1BMVEUAAP+KeNJXAAAASElEQVR4nO3BgQAAAADDoPlTX+AIVQEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwDcaiAAFXD1ujAAAAAElFTkSuQmCC"
                  alt=""
                  className="profilePicturePop"
                />
                <img
                  src="https://chat.zalo.me/assets/chat_setting_avatar_icon_edit.32e49958a4d725a69beb65e5f5a568f2.png"
                  alt=""
                  className="iconInput"
                />
              </label>
            </div>
            <div className="saveWrapper">
              <form className="editForm">
                <div className="editField">
                  <label className="inputFieldName">UserName</label>
                  <input
                    placeholder="Username"
                    defaultValue={userFromDatabse.username}
                    className="field"
                    type="text"
                    ref={username}
                  />
                </div>
                <div className="editField">
                  <label className="inputFieldName">Name</label>
                  <input
                    placeholder="Name"
                    defaultValue={userFromDatabse.name}
                    className="field"
                    type="text"
                    ref={name}
                  />
                </div>
                <div className="editField">
                  <label className="inputFieldName">Password</label>
                  <input
                    placeholder="Password"
                    defaultValue={userFromDatabse.password}
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
