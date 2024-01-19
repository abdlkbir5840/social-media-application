import React, { useEffect, useState } from "react";
import "./login.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faLock } from "@fortawesome/free-solid-svg-icons";
import { useTranslation } from "react-i18next";
import Register from "./Register";
import NavBar from "../components/navbar/NavBar";
import { useNavigate } from "react-router-dom";
import authService from "../service/auth.service";
import { loginSchema } from "../schemas";
import { useFormik } from "formik";
import { toast } from "react-toastify";
import { useCookies } from "react-cookie";
import { useDispatch } from "react-redux";
function Login() {
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [, setCookie, ] = useCookies(["authToken"]);
  const onSubmit = async (values, actions) => {
    try {
      const response = await authService.login(values);
      const token = await response.token;
      setCookie("authToken", token);
      await new Promise((resolve) => setTimeout(resolve, 1000));
      // toast.success("login success");
      actions.resetForm();
      navigate("/main");
    } catch (error) {
      console.log(error);
      toast.error(t("LOGIN.FORM.INVALID_CREDENTIALS"));
    }
  };
  const {
    values,
    errors,
    touched,
    handleChange,
    handleBlur,
    handleSubmit,
  } = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: loginSchema(t),
    onSubmit,
  });

  return (
    <div className="register-container">
      <NavBar />
      <div className="right">
        <div className="header">
          <div className="text">{t("SIGN.FORM.SIGNIN")}</div>
          <div className="underline"></div>
        </div>
        <div className="login-form">
          <div className="disply-error">
            <div className="login-form-group">
              <span className="icon">
                <FontAwesomeIcon icon={faEnvelope} />
              </span>
              <input
                value={values.email}
                onChange={handleChange}
                name="email"
                onBlur={handleBlur}
                type="email"
                id="emailId"
                placeholder={t("SIGN.FORM.EMAIL")}
                className={errors.email && touched.email ? "input-error" : ""}
              />
            </div>
            <div className="fix-width">
              {errors.email && touched.email && (
                <div className="invalid"> {errors.email}</div>
              )}
            </div>
          </div>

          <div className="disply-error">
            <div className="login-form-group">
              <span className="icon">
                <FontAwesomeIcon icon={faLock} />
              </span>
              <input
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
                type="password"
                id="passwordId"
                name="password"
                placeholder={t("SIGN.FORM.PASSWORD")}
                className={
                  errors.password && touched.password ? "input-error" : ""
                }
              />
            </div>
            <div className="fix-width">
              {errors.password && touched.password && (
                <div className="invalid"> {errors.password}</div>
              )}
            </div>
          </div>
        </div>
        <div className="submit-container" onClick={handleSubmit}>
          <div className="submit">{t("SIGN.FORM.LOGIN")}</div>
        </div>
        <div className="submit-container">
          <div className="forgot-password">
            {t("SIGN.FORM.LOSTPASSWORD")} <span>{t("APP.CLICKHERE")}</span>
          </div>
        </div>
        <div className="submit-container">
          <div className="forgot-password">
            {t("SIGN.FORM.HAVEACCOUNT")} <Register />
          </div>
        </div>
        <div className="separator">
          <hr className="line" />
          <p>{t("APP.ORWITH")}</p>
          <hr className="line" />
        </div>
        <div className="submit-container">
          <button className="btn-auth">
            <i className="fa-brands fa-google"></i>{" "}
            <span className="google">Google</span>
          </button>
          <button className="btn-auth">
            <i className="fa-brands fa-facebook"></i>{" "}
            <span className="facebook">Facebook</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Login;
