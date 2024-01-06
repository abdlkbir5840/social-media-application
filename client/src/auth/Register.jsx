import React from "react";
import { useTranslation } from "react-i18next";
import { useFormik } from "formik";
import { registrationSchema } from "../schemas";

function Register() {
  const { t } = useTranslation();
  const onSubmit = async (values, actions) => {
    console.log(values);
    console.log(actions);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    actions.resetForm();
  };
  const { values, errors, touched, isSubmitting, handleChange, handleBlur, handleSubmit } =
    useFormik({
      initialValues: {
        firstName: "",
        lastName: "",
        telephone: "",
        address: "",
        country: "",
        city: "",
        gender: "",
        email: "",
        password: "",
        confirmPassword: "",
        checkPrivacy: "",
      },
      validationSchema: registrationSchema(t),
      onSubmit,
    });
  return (
    <>
      <span
        className="btn-outline-non btn-border-non"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        {t("SIGN.FORM.RGISTERNOW")}
      </span>

      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                {t("SIGN.FORM.SIGNUP")}
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <form className="row g-3 " onSubmit={handleSubmit}>
                <div className="col-md-4">
                  <label htmlFor="firstName" className="form-label">
                    {t("SIGN.FORM.FIRSTNAME")}
                  </label>
                  <input
                    value={values.firstName}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    type="text"
                    className={
                      errors.firstName && touched.firstName
                        ? "form-control input-error"
                        : "form-control"
                    }
                    id="firstName"
                  />
                  {errors.firstName && touched.firstName && (
                    <div className="invalid"> {errors.firstName}</div>
                  )}
                </div>
                <div className="col-md-4">
                  <label htmlFor="lastName" className="form-label">
                    {t("SIGN.FORM.LASTNAME")}
                  </label>
                  <input
                    value={values.lastName}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    type="text"
                    className={
                      errors.lastName && touched.lastName
                        ? "form-control input-error"
                        : "form-control"
                    }
                    id="lastName"
                  />
                  {errors.lastName && touched.lastName && (
                    <div className="invalid"> {errors.lastName}</div>
                  )}
                </div>
                <div className="col-md-4">
                  <label htmlFor="telephone" className="form-label">
                    {t("SIGN.FORM.TELEPHONE")}
                  </label>
                  <input
                    value={values.telephone}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    type="number"
                    className={
                      errors.telephone && touched.telephone
                        ? "form-control input-error"
                        : "form-control"
                    }
                    id="telephone"
                  />
                  {errors.telephone && touched.telephone && (
                    <div className="invalid"> {errors.telephone}</div>
                  )}
                </div>
                <div className="col-md-4">
                  <label htmlFor="address" className="form-label">
                    {t("SIGN.FORM.ADDRESS")}
                  </label>
                  <input
                    value={values.address}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    type="text"
                    className={
                      errors.address && touched.address
                        ? "form-control input-error"
                        : "form-control"
                    }
                    id="address"
                  />
                  {errors.address && touched.address && (
                    <div className="invalid"> {errors.address}</div>
                  )}
                </div>
                <div className="col-md-2">
                  <label htmlFor="country" className="form-label">
                    {t("SIGN.FORM.COUNTRY")}
                  </label>
                  <input
                    value={values.country}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    type="text"
                    className={
                      errors.country && touched.country
                        ? "form-control input-error"
                        : "form-control"
                    }
                    id="country"
                  />
                  {errors.country && touched.country && (
                    <div className="invalid"> {errors.country}</div>
                  )}
                </div>
                <div className="col-md-2">
                  <label htmlFor="city" className="form-label">
                    {t("SIGN.FORM.CITY")}
                  </label>
                  <input
                    value={values.city}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    type="text"
                    className={
                      errors.city && touched.city
                        ? "form-control input-error"
                        : "form-control"
                    }
                    id="city"
                  />
                  {errors.city && touched.city && (
                    <div className="invalid"> {errors.city}</div>
                  )}
                </div>
                <div className="col-md-4">
                  <label htmlFor="gender" className="form-label">
                    {t("SIGN.FORM.GENDER")}
                  </label>
                  <select
                    className={
                      errors.gender && touched.gender
                        ? "form-select input-error"
                        : "form-select"
                    }
                    value={values.gender}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    id="gender"
                  >
                    <option value="" disabled>
                      {t("SIGN.FORM.SELECT")}
                    </option>
                    <option value="M">{t("SIGN.FORM.MALE")}</option>
                    <option value="F">{t("SIGN.FORM.FEMALE")}</option>
                  </select>
                  {errors.gender && touched.gender && (
                    <div className="invalid"> {errors.gender}</div>
                  )}
                </div>
                <div className="col-md-4">
                  <label htmlFor="email" className="form-label">
                    {t("SIGN.FORM.EMAIL")}
                  </label>
                  <div className="input-group has-validation">
                    <span className="input-group-text" id="inputGroupPrepend">
                      @
                    </span>
                    <input
                      value={values.email}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      type="text"
                      className={
                        errors.email && touched.email
                          ? "form-control input-error"
                          : "form-control"
                      }
                      id="email"
                      aria-describedby="inputGroupPrepend"
                    />
                  </div>
                  {errors.email && touched.email && (
                    <div className="invalid"> {errors.email}</div>
                  )}
                </div>
                <div className="col-md-4">
                  <label htmlFor="password" className="form-label">
                    {t("SIGN.FORM.PASSWORD")}
                  </label>
                  <input
                    value={values.password}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    type="password"
                    className={
                      errors.password && touched.password
                        ? "form-control input-error"
                        : "form-control"
                    }
                    id="password"
                  />
                  {errors.password && touched.password && (
                    <div className="invalid"> {errors.password}</div>
                  )}
                </div>
                <div className="col-md-4">
                  <label htmlFor="confirmPassword" className="form-label">
                    {t("SIGN.FORM.COFIRM_PASSWORD")}
                  </label>
                  <input
                    value={values.confirmPassword}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    type="password"
                    className={
                      errors.confirmPassword && touched.confirmPassword
                        ? "form-control input-error"
                        : "form-control"
                    }
                    id="confirmPassword"
                  />
                  {errors.confirmPassword && touched.confirmPassword && (
                    <div className="invalid"> {errors.confirmPassword}</div>
                  )}
                </div>

                <div className="col-12">
                  <div className="form-check">
                    <input
                      value={values.checkPrivacy}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className={
                        errors.checkPrivacy && touched.checkPrivacy
                          ? "form-check-input input-error"
                          : "form-check-input"
                      }
                      type="checkbox"
                      id="checkPrivacy"
                    />
                    <label className="form-check-label" htmlFor="checkPrivacy">
                      {t("FORM.PRIVACY")}
                    </label>
                    {errors.checkPrivacy && touched.checkPrivacy && (
                      <div className="invalid"> {errors.checkPrivacy}</div>
                    )}
                  </div>
                </div>
                <div className="col-12">
                  <button disabled={isSubmitting} className="btn btn-primary" type="submit">
                    {t("SIGN.FORM.SUBMIT")}
                  </button>
                </div>
              </form>
            </div>

            {/* <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Fermer
              </button>
              <button
                type="submit"
                className="btn btn-primary"
              >
                Ajouter Produit
              </button>
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
}

export default Register;
