import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import "../css/NavBar.css";

function NavBar() {
  const [show, handleshow] = useState(false);
  const history = useHistory();

  const transitionNavbar = () => {
    if (window.scrollY > 100) {
      handleshow(true);
    } else {
      handleshow(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", transitionNavbar);
    return () => window.removeEventListener("scroll", transitionNavbar);
  }, []);
  return (
    <div className={`navBar ${show && "navBar__black"}`}>
      <div className="navBar__content">
        <img
          onClick={() => history.push("/")}
          className="navBar__logo"
          src="https://assets.brand.microsites.netflix.io/assets/1561c76e-b389-11e7-9274-06c476b5c346_cm_800w.png?v=12"
          alt=""
        />
        <img
          onClick={() => history.push("/profile")}
          className="navBar_avatar"
          src="https://i.pinimg.com/originals/0d/dc/ca/0ddccae723d85a703b798a5e682c23c1.png"
          alt=""
        />
      </div>
    </div>
  );
}

export default NavBar;
