import React from "react";
import "./SignUp.css";

function SignUp() {
  return (
    <div className="signup">
      <form>
        <h1>SignIn</h1>
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />

        <button type="submit">SignIn</button>

        <h4>
          <span className="signup__gray">New to Netflix? </span>
          <span className="signup__link"> SignUp here </span>
        </h4>
      </form>
    </div>
  );
}

export default SignUp;
