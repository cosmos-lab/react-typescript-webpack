import { useState } from "react";
import Counter from "./Counter";
import RenderCount from "./RenderCount";

function Rendering() {
  const [label, setLabel] = useState("");
  const [baseCount, setBaseCount] = useState(undefined);
  const inputCss = `border border-gray-300 p-2 rounded-md shadow-sm focus:outline-none 
                    focus:ring-2 focus:ring-blue-500 focus:border-blue-500 w-1/2`;
  return (
    <>
      <div className="flex items-center p-5 gap-5">
        <input
          className={inputCss}
          placeholder="Label"
          type="text"
          value={label}
          onInput={(e: any) => setLabel(e.target.value)}
        />
        <input
          className={inputCss}
          placeholder="Base count"
          type="number"
          value={baseCount}
          onInput={(e: any) => setBaseCount(parseInt(e.target.value))}
        />
      </div>
      <Counter baseCount={baseCount ?? 0} label={label}>
        <RenderCount />
      </Counter>
    </>
  );
}

export default Rendering;
