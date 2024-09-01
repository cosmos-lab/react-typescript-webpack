import { useState } from "react";
import Counter from "./Counter";
import RenderCount from "./RenderCount";

function Rendering() {
  const [label, setLabel] = useState("foo");
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
      <Counter baseCount={baseCount} label={label}>
        <RenderCount />
      </Counter>
    </>
  );
}

export default Rendering;
