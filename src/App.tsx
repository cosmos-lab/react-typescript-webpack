import { useState } from "react";
import Counter from "@/components/Counter";

function App() {
  const [label, setLabel] = useState("Change me to re-render");
  const [baseCount, setBaseCount] = useState(1);

  return (
    <>
      <input
        placeholder="Label"
        type="text"
        value={label}
        onInput={(e: any) => setLabel(e.target.value)}
      />
      <input
        placeholder="Base count"
        type="text"
        value={baseCount}
        onInput={(e: any) => setBaseCount(e.target.value)}
      />
      <br />
      <br />
      <Counter baseCount={baseCount} label={label} />
    </>
  );
}

export default App;
