
import { Link, useNavigate } from "react-router";
import useAuthStore from "../store/authStore";

export default function Navbar() {
  const logout = useAuthStore((state) => state.logout);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login", { replace: true });
  };

  return (
    <nav className="bg-amber-400 flex  items-center  justify-evenly h-[50px] font-bold ">
    
      <Link to="/">Product</Link>

      <button className="border-1  bg-red-600 text-white hover:bg-orange-300" onClick={handleLogout}>
        Logout
      </button>
    </nav>
  );
}