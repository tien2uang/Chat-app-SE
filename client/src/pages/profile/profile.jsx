import React, { useState } from "react";
import "./profile.css";
import { FaRegTimesCircle, FaUserCircle} from "react-icons/fa";

export default function Profile() {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  return (
    <>
      <button className="tab__1__list-items" title="Thông tin" onClick={toggleModal}>
        <FaUserCircle className="items" />
      </button>
      {modal && (
        <div className="modal">
          <div onClick={toggleModal} className="overlay"></div>
          <div className="modal-content">
            <h2>Your Profile</h2>
            <h3>User name</h3>
            <button className="close-modal" onClick={toggleModal}>
              <FaRegTimesCircle className="exit" />
            </button>
          </div>
        </div>
      )}
    </>
  );
}
