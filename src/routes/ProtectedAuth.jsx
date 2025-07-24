import { useAuthContext } from "@/context/AuthContext";
import { Navigate } from "react-router-dom";

const ProtectedAuth = ({ children }) => {
  const { isLoggedIn } = useAuthContext();

  if (isLoggedIn === true) {
    return <Navigate to="/" replace />;
  }

  return children;
};

export default ProtectedAuth;
