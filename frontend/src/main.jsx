import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { AuthProvider } from "./context/AuthContext.jsx"; 
import { LeadProvider } from "./context/LeadContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>   
      <LeadProvider>
          <App />
      </LeadProvider>
    
    </AuthProvider>
  </StrictMode>
);
