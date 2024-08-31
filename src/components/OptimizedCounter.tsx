import { memo } from "react";
import RenderCount from "./RenderCount";

function OptimizedCounter({ count, baseCount, increment }: any) {
  return (
    <div>
      <b>
        OptimizedCounter Count:{count}, Base Count: {baseCount}, <RenderCount />
      </b>
      <a href="#" onClick={() => increment()}>
        Increase
      </a>
    </div>
  );
}

export default memo(OptimizedCounter);
