import React from "react";
import ReactDOM from "react-dom/client";
import "@services/mirage-mock-server";
import App from "@views/App";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);

root.render(<App />);
