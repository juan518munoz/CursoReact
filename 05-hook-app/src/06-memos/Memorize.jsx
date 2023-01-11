import { useCounter } from "../Hooks";
import { Small } from "../Components/Small";
import { useState } from "react";

export const Memorize = () => {
  const { counter, incrementar } = useCounter(1);
  const [show, setShow] = useState(true);

  return (
    <>
      <hr />
      <h1>Memorize</h1>
      <h2>
        Counter: <Small value={counter} />
      </h2>

      <button className="btn btn-primary" onClick={() => incrementar()}>
        +1
      </button>

      <button className="btn btn-secondary" onClick={() => setShow(!show)}>
        {show ? "Ocultar" : "Mostrar"}
      </button>
    </>
  );
};
