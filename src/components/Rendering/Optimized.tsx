import { memo } from "react";
import RenderCount from "./RenderCount";

function Optimized({ baseCount, increment }: any) {
  return (
    <div>
      <b>Optimized</b>{" "}
      <a className="text-blue-600" href="#" onClick={() => increment()}>
        Increase Count
      </a>
      <br />
      It will not re-render when the count increases because it is a memoized component, and the
      increment function prop is also cached using useCallback.
      <br />
      Base Count: {baseCount} <br />
      <RenderCount />
    </div>
  );
}

export default memo(Optimized);
