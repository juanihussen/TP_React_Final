import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthorizeContext";

const PrivateRoute = ({ children }) => {
  const { isLoggedIn } = useAuth();
  return isLoggedIn ? children : <Navigate to="/login" />;
};
export default PrivateRoute;
