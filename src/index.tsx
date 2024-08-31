import { createRoot } from "react-dom/client";
import App from "@/App";

// import "@services/mirage-mock-server";

const root = createRoot(document.getElementById("root") as HTMLElement);

root.render(<App />);
