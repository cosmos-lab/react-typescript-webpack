import { useState } from "react";
import Counter from "@/components/Counter";

function App() {
  const [label, setLabel] = useState("My Counter");
  const [baseCount, setBaseCount] = useState(1);

  return (
    <>
      <input
        onInput={(e: any) => setLabel(e.target.value)}
        placeholder="Label"
        type="text"
        value={label}
      />
      <input
        onInput={(e: any) => setBaseCount(e.target.value)}
        placeholder="Base count"
        type="text"
        value={baseCount}
      />
      <br />
      <hr />
      <Counter baseCount={baseCount} label={label} />
    </>
  );
}

export default App;
