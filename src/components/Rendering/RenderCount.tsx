import { useRef, useEffect } from "react";

const RenderCount = () => {
  const renderCountRef = useRef(0);

  useEffect(() => {
    renderCountRef.current += 1;
  });

  return <div>Rendered Count: {renderCountRef.current}</div>;
};

export default RenderCount;
