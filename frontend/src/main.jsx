import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import CaptainContext from "./context/CaptainContext.jsx";
import SocketProvider from "./context/SocketContext.jsx";
import { UserDataProvider } from "./context/UserContext";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <SocketProvider>
      <CaptainContext>
        <UserDataProvider>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </UserDataProvider>
      </CaptainContext>
    </SocketProvider>
  </StrictMode>
);
