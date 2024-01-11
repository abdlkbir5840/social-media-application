import * as yup from "yup";

export const registrationSchema = (t) =>
  yup.object().shape({
    firstName: yup.string().required(t("SIGN.FORM.REQUIRED")),
    lastName: yup.string().required(t("SIGN.FORM.REQUIRED")),
    telephone: yup.string().required(t("SIGN.FORM.REQUIRED")),
    address: yup.string().required(t("SIGN.FORM.REQUIRED")),
    country: yup.string().required(t("SIGN.FORM.REQUIRED")),
    city: yup.string().required(t("SIGN.FORM.REQUIRED")),
    gender: yup.string().required(t("SIGN.FORM.REQUIRED")),
    email: yup
      .string()
      .email(t("SIGN.FORM.INVALID_EMAIL"))
      .required(t("SIGN.FORM.REQUIRED")),
    password: yup
      .string()
      .required(t("SIGN.FORM.REQUIRED"))
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{5,}$/,
        t("SIGN.FORM.INVALID_PASSWORD")
      ),
    confirmPassword: yup
      .string()
      .required(t("SIGN.FORM.REQUIRED"))
      .oneOf([yup.ref("password"), null], t("SIGN.FORM.PASSWORD_MATCH")),
    checkPrivacy: yup.string().required(t("SIGN.FORM.REQUIRED")),
  });

export const loginSchema = (t) =>
  yup.object().shape({
    email: yup
      .string()
      .email(t("SIGN.FORM.INVALID_EMAIL"))
      .required(t("SIGN.FORM.REQUIRED")),
    password: yup
      .string()
      .required(t("SIGN.FORM.REQUIRED"))
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{5,}$/,
        t("SIGN.FORM.INVALID_PASSWORD")
      ),
  });
