import RenderCount from "./RenderCount";

function UnOptimized({ count, baseCount, increment }: any) {
  return (
    <div>
      <b>UnOptimized</b>{" "}
      <a className="text-blue-600" href="#" onClick={() => increment()}>
        Increase Count
      </a>
      <br />
      Base Count: {baseCount} <br />
      Count:{count} <br />
      <RenderCount />
    </div>
  );
}

export default UnOptimized;
