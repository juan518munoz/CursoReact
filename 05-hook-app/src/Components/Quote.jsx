import { useLayoutEffect, useRef, useState } from "react";

export const Quote = ({ content, author }) => {
  const pRef = useRef();
  const [boxSize, setBoxSize] = useState({ height: 0, width: 0 });

  useLayoutEffect(() => {
    const { height, width} = pRef.current.getBoundingClientRect();
    setBoxSize({ height, width})
  }, [content]);

  return (
    <blockquote className={"blockquote text-end"} style={{ display: "flex" }}>
      <p ref={pRef} className={"mb-1"}>
        {content}
      </p>
      <footer className={"blockquote-footer"}>{author}</footer>
    </blockquote>
  );
};
