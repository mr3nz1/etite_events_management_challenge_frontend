import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import UserProvider from "./ctx/UserContext";
import Router from "./navigation/Router";

export default function App() {
  return (
    <>
      <UserProvider>
        <Router />
        <ToastContainer />
      </UserProvider>
    </>
  );
}
