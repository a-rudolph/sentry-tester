import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import * as Sentry from "@sentry/react";

if (import.meta.env.VITE_SENTRY_DSN) {
  try {
    Sentry.init({
      dsn: import.meta.env.VITE_SENTRY_DSN,
      integrations: [],

      // We recommend adjusting this value in production, or using tracesSampler
      // for finer control
      tracesSampleRate: 1.0,
    });
  } catch (error) {
    console.error(error);
    console.error("Above error occured while initializing Sentry");
  }
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
