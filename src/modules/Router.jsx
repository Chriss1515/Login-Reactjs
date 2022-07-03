import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import LoginPage from "../container/Login";
import PrivateRoute from "./PrivateRoute";

const About = () => {
  return <p>je suis la page about</p>;
};

const Router = () => {
  return (
    <BrowserRouter>
      <Link to="/about">Aller sur la page about</Link>
      <Routes>
        <Route index element={<LoginPage />} />
        <Route path="/about" element={<PrivateRoute />}>
          <Route path="" element={<About />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
export default Router;
