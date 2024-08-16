import { useEffect, useState } from "react";
import Authorization from "../components/Authorization";
import axios from "axios";

const Auth = () => {
  const [authType, setAuthType] = useState("register");

  useEffect(() => {
    const token = localStorage.getItem("token");
    console.log("Current token from localStorage:", token);

    if (!token) {
      console.log("No token found in localStorage, showing register page.");
    } else {
      axios
        .get(`${process.env.REACT_APP_API_URL}/users/auth`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((response) => {
          console.log("API Response Data:", response.data);
          // Assuming the token is in response.data.token
          if (response.data.token) {
            localStorage.setItem("token", response.data.token);
            console.log("Token valid, setting authType to 'login'.");
            setAuthType("login");
          } else {
            console.log(
              "No valid token found in API response, showing register page."
            );
            setAuthType("register");
          }
        })
        .catch((error) => {
          console.log("Error during token verification:", error);
          setAuthType("register");
        });
    }
  }, []);
  return <Authorization authType={authType} setAuthType={setAuthType} />;
};

export default Auth;
