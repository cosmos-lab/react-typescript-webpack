import { useCallback, useState } from "react";
import OptimizedCounter from "./OptimizedCounter";
import RenderCount from "./RenderCount";
import UnOptimizedCounter from "./UnOptimizedCounter";

function Counter({ label, baseCount }: any) {
  const [count, setCount] = useState(baseCount);

  const increment = useCallback(() => {
    setCount(count + 1);
  }, [count]);

  const incrementU = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <RenderCount />
      <div>
        Counter Label {label} {count}{" "}
        <a href="#" onClick={() => setCount(count + 1)}>
          Increase
        </a>
      </div>
      <br />
      <br />
      <OptimizedCounter baseCount={baseCount} count={count} increment={increment} />
      <br />
      <br />
      <UnOptimizedCounter baseCount={baseCount} count={count} increment={incrementU} />
    </div>
  );
}

export default Counter;
