import { useCallback, useState } from "react";
import OptimizedCounter from "./OptimizedCounter";
import RenderCount from "./RenderCount";
import UnOptimizedCounter from "./UnOptimizedCounter";

function Counter({ label, baseCount, children = null }: any) {
  const [count, setCount] = useState(baseCount);

  const increment = useCallback(() => {
    setCount((c) => c + 1);
  }, []);

  const incrementU = () => {
    setCount((c) => c + 1);
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
      <OptimizedCounter baseCount={baseCount} count={0} increment={increment} />
      <br />
      <br />
      <UnOptimizedCounter baseCount={baseCount} count={count} increment={incrementU} />

      {children && <div>Child nodes of counter {children}</div>}
    </div>
  );
}

export default Counter;
