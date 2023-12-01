import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import { BaseUrl } from "../hooks/BaseUrl";
export const Admin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [cookies, setCookies] = useCookies(["user"]);
  const navigate = useNavigate();

  const URL = BaseUrl();

  const adminLogin = async (event) => {
    event.preventDefault();
    try {
      const login = await axios.post(`${URL}/admin/login`, { email, password });
      if (login.data.message) {
        alert(login.data.message);
      } else {
        setCookies("admin", login.data.token);
        window.localStorage.setItem("adminID", login.data.adminID);
        alert("Login Successfully");
        navigate("/adminPanel");
      }
    } catch (err) {
      alert(err.message);
    }
  };
  return (
    <div className="Admin">
      <div className="adminForm">
        <form className="adminAuthentication">
          <h2>Admin Login</h2>
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
          <button onClick={(e) => adminLogin(e)}>Login</button>
        </form>
      </div>
    </div>
  );
};
