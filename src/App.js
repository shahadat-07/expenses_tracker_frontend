import React from "react";
import "./App.css";
import Main from "./components/Main/Main";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Login/Login";
import SignUp from "./components/SignUp/SignUp";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import { useState, useEffect } from "react";

export const UserContext = React.createContext();

function App() {
  const [userEmail, setUserEmail] = useState({});
  // const userEmail = isLoggedIn.data.user.email;
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user) {
      setUserEmail(user.data.user.email);
    }
  }, []);

  return (
    <UserContext.Provider value={{ userEmail: userEmail }}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />}></Route>
          <Route element={<PrivateRoute isLoggedIn={true} />}>
            <Route path="/dashboard" element={<Main />} />
          </Route>
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </BrowserRouter>
    </UserContext.Provider>
  );
}

export default App;
