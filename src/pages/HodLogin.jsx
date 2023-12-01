import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import { BaseUrl } from "../hooks/BaseUrl";

const HodLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [cookies, setCookies] = useCookies(["user"]);
  const navigate = useNavigate();

  const URL = BaseUrl();

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const login = await axios.post(`${URL}/auth/login`, { email, password });
      if (login.data.message) {
        alert(login.data.message);
      } else {
        setCookies("hod", login.data.token);
        window.localStorage.setItem("hodID", login.data.hodID);
        alert("Login Successfully");
        navigate("/hodHome");
      }
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <div className="Admin">
      <div className="adminForm">
        <form className="adminAuthentication" onSubmit={(e) => onSubmit(e)}>
          <h2>HOD Login</h2>
          <input
            type="email"
            className="inputElement"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            className="inputElement"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit">Login</button>
        </form>
        <span>Don't have account? </span>
        <Link to="/hodRegister">Register</Link>
      </div>
    </div>
  );
};

export { HodLogin };
