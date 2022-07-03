import "./styles.css";
import LoginProvider from "./context/LoginContext";
import Router from "./modules/Router";

export default function App() {
  return (
    <LoginProvider>
      <Router />
    </LoginProvider>
  );
}
