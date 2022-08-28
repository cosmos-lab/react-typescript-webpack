import { lazy } from "react";

const LazzyComponent = lazy(() => import("./LazzyComponent"));
function App() {
  return (
    <div>
      <div>React and TypeScript</div>
      <div>Hello </div>
      <LazzyComponent />
    </div>
  );
}

export default App;
