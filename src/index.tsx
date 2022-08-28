import ReactDOM from "react-dom/client";
import App from "@views/App";

import "@services/mirage-mock-server";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);

root.render(<App />);
