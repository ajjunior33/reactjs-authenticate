import React from "react";
import { BrowserRouter } from "react-router-dom";
import ListRoutes from "./routes";
import { AuthProvider } from "./contexts/Auth";
import "./styles/global.css";
export default function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <ListRoutes />
      </AuthProvider>
    </BrowserRouter>
  );
}
