import { Navigate, Outlet } from "react-router";
import { useSelector } from "react-redux";

const ProtectedRoute = () => {
  const credentials = useSelector((state) => state.credentials);
  const isAuthenticated =
    credentials.email &&
    credentials.id &&
    credentials.access_token &&
    credentials.refresh_token;

  return isAuthenticated ? <Outlet /> : <Navigate to="/" replace />;
};

export default ProtectedRoute;
