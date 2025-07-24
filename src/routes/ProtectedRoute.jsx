import { useAuthContext } from "@/context/AuthContext";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const { isLoggedIn } = useAuthContext();

  if (isLoggedIn === false) {
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default ProtectedRoute;
