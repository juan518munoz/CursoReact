import {useCounter} from "../Hooks/useCounter";

export const CounterWithCustomHook = () => {

    const val = 2;
    const { counter, incrementar, reducir, resetear } = useCounter(val);

    return (
      <>
        <hr />
        <h1>Counter with Hook: {counter}</h1>
        <button className={"btn btn-primary"} onClick={() => incrementar(val)}>
          +{val}
        </button>
        <button className={"btn btn-primary"} onClick={() => reducir(val)}>
          -{val}
        </button>
        <button className={"btn btn-primary"} onClick={resetear}>
          Reset
        </button>
      </>
    );
}