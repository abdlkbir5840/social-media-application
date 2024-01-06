import React from "react";
import "./login.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faLock } from "@fortawesome/free-solid-svg-icons";
import { useTranslation } from "react-i18next";
import Register from "./Register";
import NavBar from "../components/navbar/NavBar";
function Login() {
  const { t} = useTranslation();
  return (
    <div className="register-container">
      <NavBar />
      <div className="right">
        <div className="test">
        </div>
        <div className="header">
          <div className="text">{t('SIGN.FORM.SIGNIN')}</div>
          <div className="underline"></div>
        </div>
        <div className="login-form">
          <div className="login-form-group">
            <span className="icon">
              <FontAwesomeIcon icon={faEnvelope} />
            </span>
            <input type="email" placeholder={t('SIGN.FORM.EMAIL')} />
          </div>
          <div className="login-form-group">
            <span className="icon">
              <FontAwesomeIcon icon={faLock} />
            </span>
            <input type="password" placeholder={t('SIGN.FORM.PASSWORD')} />
          </div>
        </div>
        <div className="submit-container">
          <div className="submit">{t('SIGN.FORM.LOGIN')}</div>
        </div>
        <div className="submit-container">
          <div className="forgot-password">
            {t('SIGN.FORM.LOSTPASSWORD')} <span>{t('APP.CLICKHERE')}</span>
          </div>
        </div>
        <div className="submit-container">
          <div className="forgot-password">
            {t('SIGN.FORM.HAVEACCOUNT')} <Register/>
          </div>
        </div>
        <div className="separator">
          <hr className="line" />
          <p>{t('APP.ORWITH')}</p>
          <hr className="line" />
        </div>
        <div className="submit-container">
          <button className="btn-auth">
            <i className="fa-brands fa-google"></i> <span className="google">Google</span>
          </button>
          <button className="btn-auth">
            <i className="fa-brands fa-facebook"></i> <span className="facebook">Facebook</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Login;
