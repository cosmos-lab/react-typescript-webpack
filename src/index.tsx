import ReactDOM from "react-dom/client";
import App from "@views/App";
import "box-scss";

import "@services/mirage-mock-server";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);

root.render(<App />);
