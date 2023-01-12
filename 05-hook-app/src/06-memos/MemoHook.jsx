import { useCounter } from "../Hooks";
import { useState } from "react";
import { useMemo } from "react";

const heavyStuff = (it = 100) => {
  for(let i = 0; i < it; i++) {
    console.log('fiumba')
  }

  return `${it} iteraciones realizadas`;
}


export const MemoHook = () => {
  const { counter, incrementar } = useCounter(100);
  const [show, setShow] = useState(true);

  const memorizedValue = useMemo(() => heavyStuff(counter), [counter])

  return (
    <>
      <hr />
      <h1>MemoHook</h1>
      <h2>
        Counter: <small>{counter}</small>
      </h2>
      <h4>{memorizedValue}</h4>

      <button className="btn btn-primary" onClick={() => incrementar()}>
        +1
      </button>

      <button className="btn btn-secondary" onClick={() => setShow(!show)}>
        {show ? "Ocultar" : "Mostrar"}
      </button>
    </>
  );
};
