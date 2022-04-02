import {
  FaSignInAlt,
  FaSignOutAlt,
  FaShoppingCart,
} from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout, reset } from "../features/auth/authSlice";

function Header() {
  const nav = useNavigate();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  const onLogout = () => {
    dispatch(logout());
    dispatch(reset());
    nav("/");
  };
  return (
    <header className="header">
      <div className="logo">
        <Link to="/"> Pistache Nursery </Link>
      </div>
      <ul>
        {user ? (
          <li>
            <button className="btn" onClick={onLogout}>
              <FaSignOutAlt /> Logout
            </button>
          </li>
        ) : (
          <li>
            <Link to="/login">
              <FaSignInAlt /> Login
            </Link>
          </li>
        )}
        <li>
          <Link to="/cart">
            <FaShoppingCart /> Cart
          </Link>
        </li>
      </ul>
    </header>
  );
}

export default Header;
