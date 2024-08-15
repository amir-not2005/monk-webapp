import { useEffect, useState } from "react";
import Authorization from "../components/Authorization";
import axios from "axios";

const Auth = () => {
  // First I check if the user has bearer token
  // If not, then I return the register page where user can login if needed
  // If yes, then I return the login page

  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("token");
    console.log("TOKEN:", token);

    if (!token) {
      // Handle the case where there is no token
      setError("No token found, please log in.");

      return;
    }

    axios
      .get(`${REACT_APP_API_URL}/users/auth`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        setData(response.data);
        const token = localStorage.setItem(data);
        console.log("TOKEN:", token);
      })
      .catch((error) => {
        setError(error);
      });
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <Authorization authType={"register"} />;

  return <Authorization authType={"login"} />;
};

export default Auth;
