import React from "react";
import "./login.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faLock } from "@fortawesome/free-solid-svg-icons";
function Login() {
  return (
    <div className="register-container">
      <div className="left"></div>
      <div className="right">
        <div className="header">
          <div className="text">Sign In</div>
          <div className="underline"></div>
        </div>
        <div className="form">
          <div className="form-group">
            <span className="icon">
              <FontAwesomeIcon icon={faEnvelope} />
            </span>
            <input type="email" placeholder="Email" />
          </div>
          <div className="form-group">
            <span className="icon">
              <FontAwesomeIcon icon={faLock} />
            </span>
            <input type="password" placeholder="Password" />
          </div>
        </div>

        <div className="submit-container">
          <div className="submit">Login</div>
        </div>
        <div className="submit-container">
          <div className="forgot-password">
            Lost Password? <span>Click Here!</span>
          </div>
        </div>
        <div className="submit-container">
          <div className="forgot-password">
            You don't have an account? <span>Register now!</span>
          </div>
        </div>
        <div class="separator">
          <hr class="line" />
          <p>or with</p>
          <hr class="line" />
        </div>
        {/* <div className="submit-container">
          <button className="btn">Google</button>
        </div> */}
        <div className="submit-container">
          <button className="btn"><i class="fa-brands fa-google"></i> Google</button>
          <button className="btn"><i class="fa-brands fa-facebook"></i>Facebook</button>
        </div>
      </div>
    </div>
  );
}

export default Login;
