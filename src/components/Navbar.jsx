import { Link } from "react-router-dom";
import { hodID } from "../hooks/hodID";
import { AdminID } from "../hooks/AdminID";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
export const Navbar = () => {
  const [cookies, setCookies] = useCookies(["hod"]);
  const hodId = hodID();
  const adminID = AdminID();
  const navigate = useNavigate();
  const logout = () => {
    setCookies("hod", "");
    window.localStorage.removeItem("hodID");
    setCookies("admin", "");
    window.localStorage.removeItem("adminID");
    window.localStorage.removeItem("roomNo");
    window.localStorage.removeItem("Requested");
    window.localStorage.removeItem("duration");
    navigate("/");
    window.location.reload();
  };
  return (
    <div className="navbar">
      <div className="navbarLeft">
        <h2>KITS</h2>
      </div>
      <div className="navbarRight">
        {hodId || adminID ? (
          <button onClick={logout}>Logout</button>
        ) : (
          <div className="else">
            <Link className="navLinks" to="/">
              Home
            </Link>
            <Link className="navLinks" to="/admin">
              Admin
            </Link>
            <Link className="navLinks" to="/hodRegister">
              HOD
            </Link>
          </div>
        )}
        <div className="admin"></div>
      </div>
    </div>
  );
};
