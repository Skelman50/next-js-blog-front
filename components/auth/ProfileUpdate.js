import { useState, useEffect, useRef } from "react";
import { getCookie, updateUserInLocalStorage } from "../../actions/auth";
import { getProfile, update } from "../../actions/user";
import ProfileUpdateForm from "../../ui/ProfileUpdateForm";
import { API } from "../../config";
import ShowError from "../../ui/ShowError";
import ShowSuccess from "../../ui/ShowSuccess";

const ProfileUpdate = () => {
  const [values, setValues] = useState({
    password: "",
    name: "",
    email: "",
    about: "",
    username: "",
  });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  const [photoParams, setPhotoParams] = useState("");

  const userData = useRef(null);

  useEffect(() => {
    init();
    userData.current = new FormData();
  }, []);

  const token = getCookie("token");

  const init = async () => {
    const response = await getProfile(token);
    setPhotoParams("");
    if (response.error) {
      setError(response.error);
    } else {
      updateValues(response);
    }
  };

  const updateValues = (response) => {
    const { name, email, username, about } = response;
    setValues({
      ...values,
      name,
      email,
      about,
      username,
    });
    setPhotoParams(username);
  };

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    const valueToSet = name === "photo" ? files[0] : value;

    userData.current.set(name, valueToSet);
    setValues({ ...values, [name]: value });
    setError("");
    setSuccess(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const response = await update(token, userData.current);
    setLoading(false);
    if (response.error) {
      setError(response.error);
      setSuccess(false);
    } else {
      updateUserInLocalStorage(response, () => {
        setSuccess(true);
        updateValues(response);
        setError("");
      });
    }
  };
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-4">
          {photoParams && (
            <img
              className="img img-fluid img-thumbnail"
              srcSet={`${API}/user/photo/${photoParams}?dummy=${new Date().getTime()}`}
              alt=""
            />
          )}
        </div>
        <div className="col-md-8">
          {error && <ShowError error={error} />}
          {success && <ShowSuccess text="Profile updated" />}
          <ProfileUpdateForm
            values={values}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
            loading={loading}
          />
        </div>
      </div>
    </div>
  );
};

export default ProfileUpdate;
