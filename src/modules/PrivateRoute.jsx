import { Navigate, Outlet } from "react-router-dom";
import { useContext } from "react";
import { LoginContext } from "../context/LoginContext";

const PrivateRoute = () => {
  const { isLogin } = useContext(LoginContext);

  return isLogin ? <Outlet /> : <Navigate to="/" />;
};

export default PrivateRoute;
