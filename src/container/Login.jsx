import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { LoginContext } from "../context/LoginContext";

const db = { email: "sofiane@gmail.fr", password: "mdp" };

const LoginPage = () => {
  const [data, setData] = useState({ email: null, password: null });
  const { isLogin, setIsLogin } = useContext(LoginContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("isLogin") === "true") {
      setIsLogin(true);
    }
  }, [setIsLogin]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (data.email === db.email && data.password === db.password) {
      setIsLogin(true);
      localStorage.setItem("isLogin", true);
    }
  };

  useEffect(() => {
    if (isLogin) {
      navigate("/about");
    }
  }, [isLogin, navigate]);

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="email"
        onChange={(e) =>
          setData((prevState) => ({ ...prevState, email: e.target.value }))
        }
      />
      <input
        type="password"
        onChange={(e) =>
          setData((prevState) => ({ ...prevState, password: e.target.value }))
        }
      />
      <input type="submit" />
    </form>
  );
};

export default LoginPage;
