import React from "react";
import { useEffect, useCallback, useState } from "react";
import { ShowIncrement } from "./ShowIncrement";

export const CallBackHook = () => {
  const [counter, setCounter] = useState(10);

  const increment = useCallback((value) => {
    setCounter((c) => c + value);
  }, []);

  return (
    <>
      <hr />
      <h1>useCallBack hook: {counter} </h1>
      <ShowIncrement increment={increment} />
    </>
  );
};
