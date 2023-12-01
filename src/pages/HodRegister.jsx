import { useState } from "react";
import { BaseUrl } from "../hooks/BaseUrl";
import axios from "axios";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
export const HodRegister = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const URL = BaseUrl();
  const handleBtn = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(`${URL}/auth/register`, {
        email,
        password,
      });
      alert(response.data.message);
      navigate("/hodLogin");
    } catch (err) {
      console.log(err.message);
    }
  };
  return (
    <div className="Admin">
      <div className="adminForm">
        <form className="adminAuthentication">
          <h2>HOD Register</h2>
          <input
            type="email"
            className="inputElement"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            className="inputElement"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="btn" type="submit" onClick={(e) => handleBtn(e)}>
            Register
          </button>
        </form>
        <span>Already have an account? </span>
        <Link to="/hodLogin">Login</Link>
      </div>
    </div>
  );
};
