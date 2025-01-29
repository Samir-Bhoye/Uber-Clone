// import React, { useEffect } from "react";
// // import { UserDataContext } from '../context/UserContext'
// import { useNavigate } from "react-router-dom";

// const UserProtectWrapper = ({ children }) => {
//   // const { user} =useContext(UserDataContext)
//   const token = localStorage.getItem("token");
//   const navigate = useNavigate();
//   useEffect(() => {
//     if (!token) {
//       navigate("/login");
//     }
//   }, [token, navigate]);
//   return token ? <>{children}</> : null;
// };

// export default UserProtectWrapper;
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
// import { UserDataContext } from '../context/UserContext'

const UserProtectWrapper = ({ children }) => {
  const token = localStorage.getItem("token");
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);
  // const { user, setUser } = useContext(UserDataContext);

  useEffect(() => {
    if (!token) {
      navigate("/login");
      return;
    }

    // Fetch user profile data
    axios
      .get(`${import.meta.env.VITE_BASE_URL}/users/profile`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        if (response.status === 200) {
          // Optionally set user data in context if needed
          // setUser(response.data.user);
          setIsLoading(false);
        }
      })
      .catch((err) => {
        console.log(err);
        localStorage.removeItem("token");
        navigate("/login");
      });
  }, [token, navigate]); // Dependencies for useEffect to run when token or navigate changes

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return token ? <>{children}</> : null;
};

export default UserProtectWrapper;
