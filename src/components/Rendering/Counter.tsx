import { useCallback, useEffect, useState } from "react";
import Optimized from "./Optimized";
import RenderCount from "./RenderCount";
import UnOptimized from "./UnOptimized";

function Counter({ label, baseCount, children = null }: any) {
  const [count, setCount] = useState(baseCount);

  useEffect(() => setCount(baseCount), [baseCount]);

  const increment = useCallback(() => {
    setCount((c) => c + 1);
  }, []);

  const incrementU = () => {
    setCount((c) => c + 1);
  };

  return (
    <div
      className="border-solid border border-indigo-600 p-4 rounded mx-5"
      style={{
        fontFamily: "monospace",
        fontSize: "12px",
        lineHeight: "150%",
      }}
    >
      <div>
        <b>Counter Container</b>
        <br />
        Count: {count}
        <br />
        Label: {label}
        <br />
        <RenderCount />
      </div>
      <br />
      <br />
      {children && (
        <div>
          <b>{"'children'"} component of counter</b> <br />
          A child component that does not re-render when state changes
          <br /> {children}
        </div>
      )}
      <br />
      <br />
      <Optimized baseCount={baseCount} increment={increment} />
      <br />
      <br />
      <UnOptimized baseCount={baseCount} count={count} increment={incrementU} />
    </div>
  );
}

export default Counter;
