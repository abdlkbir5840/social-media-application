import React from "react";
import { useCookies } from "react-cookie";
import instance from "../api/apiConfig";
import { Navigate, Outlet } from "react-router-dom";
import BeatLoader from "react-spinners/BeatLoader";
import { useDispatch } from "react-redux";
import { getCurrentUser } from "../store/auth.slice";
function RequireAuth({ children }) {
  const [cookies, ,] = useCookies(["authToken"]);
  const token = cookies.authToken;
  const [isAuthenticated, setIsAuthenticated] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(true);
  const dispatch = useDispatch();
  const fetchData = async () => {
    try {
      if (token) {
        instance.defaults.headers.common["Authorization"] = `Bearer ${token}`;
      }

      const response = await instance.get("/api/v1/profile/profileSelection");
      dispatch(getCurrentUser());
      // console.log(response.data);

      if (response.data !== undefined) {
        setIsAuthenticated(true);
      } else {
        setIsAuthenticated(false);
      }
    } catch (error) {
      console.error("Error loading user:", error.response?.data?.message);
      // console.error("Votre session est terminée. Veuillez vous reconnecter.");
      setIsAuthenticated(false);
    } finally {
      setIsLoading(false);
    }
  };

  React.useEffect(() => {
    fetchData();
    const intervalId = setInterval(fetchData, 1 * 10000);

    return () => {
      delete instance.defaults.headers.common["Authorization"];
      clearInterval(intervalId);
    };
  }, [token]);

  // console.log(isAuthenticated);

  React.useEffect(() => {
    const delayId = setTimeout(() => {
      setIsLoading(false);
    }, 10000);

    return () => clearTimeout(delayId);
  }, []);

  if (isLoading) {
    // return <>Loading ........</>;
    return (
      <div style={{height:"100vh"}} className="d-flex justify-content-center align-items-center w-100 ">
        <BeatLoader color="#36d7b7" />
      </div>
    );
  }

  if (!isAuthenticated) {
    return <Navigate to="/" replace={true} />;
  }

  return <>{children}</>;
}

export default RequireAuth;
