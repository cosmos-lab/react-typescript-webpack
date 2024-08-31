import RenderCount from "./RenderCount";

function UnOptimizedCounter({ count, baseCount, increment }: any) {
  return (
    <div>
      <b>
        UnOptimizedCounter Count:{count}, Base Count: {baseCount}, <RenderCount />
      </b>{" "}
      <a href="#" onClick={() => increment()}>
        Increase
      </a>
    </div>
  );
}

export default UnOptimizedCounter;
