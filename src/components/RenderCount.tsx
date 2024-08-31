import { useRef, useEffect } from "react";

const RenderCount = () => {
  const renderCountRef = useRef(0);

  useEffect(() => {
    renderCountRef.current += 1;
  });

  return <div>Rendered {renderCountRef.current} times.</div>;
};

export default RenderCount;
