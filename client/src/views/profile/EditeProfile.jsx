import { useFormik } from "formik";
import React, { useMemo } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { editProfile, selectIsLoading } from "../../store/profile.slice";

function EditeProfile({ userProfile, currentUserId }) {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const {
    id,
    userId,
    firstName,
    lastName,
    telephone,
    address,
    gender,
    country,
    city,
    coverImg,
    profileImg,
    birthday,
    bio,
  } = userProfile ?? {};
  const initialValues = useMemo(
    () => ({
      userId,
      profileId: id,
      firstName,
      lastName,
      telephone,
      address,
      country,
      city,
      gender,
      profileImg: null,
      coverImg: null,
      birthday,
      bio,
    }),
    [
      userId,
      id,
      firstName,
      lastName,
      telephone,
      address,
      country,
      city,
      gender,
      birthday,
      bio,
    ]
  );
  const onSubmit = async (values, actions) => {
    actions.setSubmitting(false);
    const basePath = "C:\\fakepath\\";
    const profileImgValue = values.profileImg?.replace(basePath, "");
    const coverImgValue = values.coverImg?.replace(basePath, "");

    const profileDto = {
      userId: values.userId,
      id: values.profileId,
      firstName: values.firstName,
      lastName: values.lastName,
      telephone: values.telephone,
      address: values.address,
      country: values.country,
      city: values.city,
      gender: values.gender,
      profileImg: profileImgValue,
      coverImg: coverImgValue,
      birthday: values.birthday,
      bio: values.bio,
    };

    const profileId = userProfile.id;
    dispatch(editProfile({ profileDto, profileId, currentUserId }));
  };

  const { values, isSubmitting, handleChange, handleSubmit } = useFormik({
    initialValues,
    onSubmit,
  });
  return (
    <>
      <span
        className="btn-outline-non btn-border-non"
        data-bs-toggle="modal"
        data-bs-target="#editProfileModal"
      >
        <i className="fa-solid fa-pen-to-square m-2"></i> Edit
      </span>
      <div
        className="modal fade"
        id="editProfileModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                {t("FORM.EDIT_PROFIL.TITLE")}
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
                    type="text"
                    className="form-control"
                    id="firstName"
                    placeholder={t("SIGN.FORM.FIRSTNAME")}
                  />
                </div>
                <div className="col-md-4">
                  <label htmlFor="lastName" className="form-label">
                    {t("SIGN.FORM.LASTNAME")}
                  </label>
                  <input
                    value={values.lastName}
                    onChange={handleChange}
                    type="text"
                    className="form-control"
                    id="lastName"
                    placeholder={t("SIGN.FORM.LASTNAME")}
                  />
                </div>
                <div className="col-md-4">
                  <label htmlFor="telephone" className="form-label">
                    {t("SIGN.FORM.TELEPHONE")}
                  </label>
                  <input
                    value={values.telephone}
                    onChange={handleChange}
                    type="number"
                    className="form-control"
                    id="telephone"
                    placeholder={t("SIGN.FORM.TELEPHONE")}
                  />
                </div>
                <div className="col-md-4">
                  <label htmlFor="address" className="form-label">
                    {t("SIGN.FORM.ADDRESS")}
                  </label>
                  <input
                    value={values.address}
                    onChange={handleChange}
                    type="text"
                    className="form-control"
                    id="address"
                    placeholder={t("SIGN.FORM.ADDRESS")}
                  />
                </div>
                <div className="col-md-2">
                  <label htmlFor="country" className="form-label">
                    {t("SIGN.FORM.COUNTRY")}
                  </label>
                  <input
                    value={values.country}
                    onChange={handleChange}
                    type="text"
                    className="form-control"
                    id="country"
                    placeholder={t("SIGN.FORM.COUNTRY")}
                  />
                </div>
                <div className="col-md-2">
                  <label htmlFor="city" className="form-label">
                    {t("SIGN.FORM.CITY")}
                  </label>
                  <input
                    value={values.city}
                    onChange={handleChange}
                    type="text"
                    className="form-control"
                    id="city"
                    placeholder={t("SIGN.FORM.CITY")}
                  />
                </div>
                <div className="col-md-4">
                  <label htmlFor="gender" className="form-label">
                    {t("SIGN.FORM.GENDER")}
                  </label>
                  <select
                    className={"form-select"}
                    value={values.gender}
                    onChange={handleChange}
                    id="gender"
                  >
                    <option value="" disabled>
                      {t("SIGN.FORM.SELECT")}
                    </option>
                    <option value="M">{t("SIGN.FORM.MALE")}</option>
                    <option value="F">{t("SIGN.FORM.FEMALE")}</option>
                  </select>
                </div>

                <div className="col-md-6">
                  <label htmlFor="profileImg" className="form-label">
                    {t("FORM.EDIT_PROFIL.PROFILE")}
                  </label>
                  <input
                    value={values.profileImg}
                    onChange={handleChange}
                    type="file"
                    className="form-control"
                    id="profileImg"
                  />
                </div>
                <div className="col-md-6">
                  <label htmlFor="coverImg" className="form-label">
                    {t("FORM.EDIT_PROFIL.COVER")}
                  </label>
                  <input
                    value={values.coverImg}
                    onChange={handleChange}
                    type="file"
                    className="form-control"
                    id="coverImg"
                  />
                </div>
                <div className="col-md-6">
                  <label htmlFor="birthday" className="form-label">
                    {t("FORM.EDIT_PROFIL.COVER")}
                  </label>
                  <input
                    value={values.birthday}
                    onChange={handleChange}
                    type="date"
                    className="form-control"
                    id="birthday"
                  />
                </div>
                <div className="col-12">
                  <button
                    disabled={isSubmitting}
                    className="btn btn-primary"
                    data-bs-dismiss="modal"
                    type="submit"
                  >
                    {t("SIGN.FORM.SUBMIT")}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default EditeProfile;
