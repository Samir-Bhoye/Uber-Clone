// import React from "react";
// import { Link, useNavigate } from "react-router-dom";
// import { useState, useContext } from "react";
// // import { useUser } from "../context/UserContext";
// import axios from "axios";
// import { UserDataContext } from "../context/UserContext";
// const UserSignup = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [firstName, setfirstName] = useState("");
//   const [lastName, setlastName] = useState("");
//   const [userData, setUserData] = useState({});

//   const navigate = useNavigate();
//   const [user, setUser] = useContext(UserDataContext);
//   const submitHandler = async (e) => {
//     e.preventDefault();
//     // console.log(firstname,lastname,email,password);

//     const newUser = {
//       fullname: {
//         firstname: firstName,
//         lastname: lastName,
//       },
//       email: email,
//       password: password,
//     };
//     try {
//       const response = await axios.post(
//         `${import.meta.env.VITE_BASE_URL}/users/register`,
//         newUser
//       );
//       if (response.status === 201) {
//         const data = response.data;
//         setUser(data.user);
//         localStorage.setItem('token', data.token);
//         navigate("/home");
//       }
//     } catch (error) {
//       if (error.response?.status === 400) {
//         console.error("Validation Error:", error.response.data.errors);
//         // alert(error.response.data.errors[0]?.msg || "Registration failed.");
//       } else {
//         console.error("Error during registration:", error.message);
//       }
//     }
//     console.log(userData);
//     setfirstName("");
//     setlastName("");
//     setEmail("");
//     setPassword("");
//   };
//   return (
//     <div>
//       <div className="p-7 h-screen  flex flex-col justify-between">
//         <div>
//           <img
//             className="w-16 mb-10"
//             src="https://imgs.search.brave.com/4ATIxs0SwT-DsZ4ajF7jlixEaXFqw5Ys2I5OFQa8JEM/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9sb2dv/cy13b3JsZC5uZXQv/d3AtY29udGVudC91/cGxvYWRzLzIwMjAv/MDUvVWJlci1Mb2dv/LTcwMHgzOTQucG5n"
//             alt="img processing"
//           />
//           <form
//             onSubmit={(e) => {
//               submitHandler(e);
//             }}
//           >
//             <h3 className="text-lg font-medium mb-2">Enter your Name</h3>
//             <div className="flex gap-4 mb-5">
//               <input
//                 className="bg-[#eeeeee] w-1/2  rounded px-4 py-2  border text-base placeholder:text-sm"
//                 required
//                 value={firstName}
//                 onChange={(e) => {
//                   setfirstName(e.target.value);
//                 }}
//                 type="text"
//                 placeholder="First Name"
//               />
//               <input
//                 className="bg-[#eeeeee] w-1/2  rounded px-4 py-2  border text-base placeholder:text-sm"
//                 required
//                 value={lastName}
//                 onChange={(e) => {
//                   setlastName(e.target.value);
//                 }}
//                 type="text"
//                 placeholder="Last Name"
//               />
//             </div>
//             <h3 className="text-base font-medium mb-2">Enter your email</h3>
//             <input
//               className="bg-[#eeeeee] mb-5 rounded px-4 py-2  border w-full text-base placeholder:text-sm"
//               required
//               onChange={(e) => {
//                 setEmail(e.target.value);
//               }}
//               value={email}
//               type="email"
//               placeholder="email@example.com"
//             />
//             <h3 className="text-base font-medium  mb-2">Enter Password</h3>
//             <input
//               className="bg-[#eeeeee] mb-5 rounded px-4 py-2  border w-full text-base placeholder:text-sm"
//               required
//               value={password}
//               onChange={(e) => {
//                 setPassword(e.target.value);
//               }}
//               type="password"
//               placeholder="Password"
//             />
//             <button className="bg-[#111] text-white font-semibold mb-7 rounded px-4 py-2   w-full text-lg placeholder:text-base">
//               Create Account
//             </button>
//           </form>
//           <p className="text-center">
//             Already have a Account?
//             <Link to="/login" className="text-blue-600">
//               Login here
//             </Link>
//           </p>
//         </div>
//         <div>
//           <p className="text-[10px] leading-tight ">
//             By proceeding, you consent to get calls,WhatsApp or SMS messages,
//             including by automated means ,from Uber and its affiliates to the
//             number provided.
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default UserSignup;
import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { UserDataContext } from "../context/UserContext";

const UserSignup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setfirstName] = useState("");
  const [lastName, setlastName] = useState("");

  const navigate = useNavigate();
  const { user, setUser } = useContext(UserDataContext); // ✅ Fix: useContext returns an object

  const submitHandler = async (e) => {
    e.preventDefault();

    const newUser = {
      fullname: {
        firstname: firstName,
        lastname: lastName,
      },
      email: email,
      password: password,
    };

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BASE_URL}/users/register`,
        newUser
      );
      if (response.status === 201) {
        setUser(response.data.user);
        localStorage.setItem("token", response.data.token);
        navigate("/home");
      }
    } catch (error) {
      console.error("Error during registration:", error.message);
    }

    setfirstName("");
    setlastName("");
    setEmail("");
    setPassword("");
  };

  return (
    <div className="p-7 h-screen flex flex-col justify-between">
      <div>
        <img
          className="w-16 mb-10"
          src="https://imgs.search.brave.com/4ATIxs0SwT-DsZ4ajF7jlixEaXFqw5Ys2I5OFQa8JEM/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9sb2dv/cy13b3JsZC5uZXQv/d3AtY29udGVudC91/cGxvYWRzLzIwMjAv/MDUvVWJlci1Mb2dv/LTcwMHgzOTQucG5n"
          alt="Uber Logo"
        />
        <form onSubmit={submitHandler}>
          <h3 className="text-lg font-medium mb-2">Enter your Name</h3>
          <div className="flex gap-4 mb-5">
            <input
              className="bg-[#eeeeee] w-1/2 rounded px-4 py-2 border"
              required
              value={firstName}
              onChange={(e) => setfirstName(e.target.value)}
              type="text"
              placeholder="First Name"
            />
            <input
              className="bg-[#eeeeee] w-1/2 rounded px-4 py-2 border"
              required
              value={lastName}
              onChange={(e) => setlastName(e.target.value)}
              type="text"
              placeholder="Last Name"
            />
          </div>
          <h3 className="text-base font-medium mb-2">Enter your email</h3>
          <input
            className="bg-[#eeeeee] mb-5 rounded px-4 py-2 border w-full"
            required
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            type="email"
            placeholder="email@example.com"
          />
          <h3 className="text-base font-medium mb-2">Enter Password</h3>
          <input
            className="bg-[#eeeeee] mb-5 rounded px-4 py-2 border w-full"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="Password"
          />
          <button className="bg-[#111] text-white font-semibold mb-7 rounded px-4 py-2 w-full">
            Create Account
          </button>
        </form>
        <p className="text-center">
          Already have an account?
          <Link to="/login" className="text-blue-600">
            Login here
          </Link>
        </p>
      </div>
      <p className="text-[10px] leading-tight">
        By proceeding, you consent to get calls, WhatsApp, or SMS messages,
        including by automated means, from Uber and its affiliates to the
        number provided.
      </p>
    </div>
  );
};

export default UserSignup;
