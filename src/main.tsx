import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./app.tsx";
import "./index.css";
import { Toaster } from "sonner";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
    <Toaster
      richColors
      toastOptions={{
        style: {
          background: "#475569",
          color: "#a3e635",
          borderColor: "#a3e635",
        },
      }}
    />
  </React.StrictMode>
);
