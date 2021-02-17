import React from "react";
import { useSelector } from "react-redux";
import NavBar from "../components/NavBar";
import { selectUser } from "../features/userSlice";
import { auth } from "../firebase";
import "./Profile.css";

function Profile() {
  const user = useSelector(selectUser);
  return (
    <div className="profile">
      <NavBar />
      <div className="profile__body">
        <h1>Edit Profile</h1>
        <div className="profile__info">
          <img
            src="https://i.pinimg.com/originals/0d/dc/ca/0ddccae723d85a703b798a5e682c23c1.png"
            alt=""
          />
          <div className="profile__details">
            <h2>{user.email}</h2>
            <div className="profile__plans">
              <button
                onClick={() => auth.signOut()}
                className="profile__signOut"
              >
                Sign Out
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
