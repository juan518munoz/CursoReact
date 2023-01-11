import {useCounter} from "../Hooks/useCounter";

export const CounterWithCustomHook = () => {

    const { counter, incrementar, reducir, resetear } = useCounter(2);

    return (
        <>
            <hr />
            <h1>Counter with Hook: {counter}</h1>
            <button className={"btn btn-primary"} onClick={() => incrementar(2)}>+1</button>
            <button className={"btn btn-primary"} onClick={() => reducir(2)}>-1</button>
            <button className={"btn btn-primary"} onClick={resetear}>Reset</button>
        </>
    )
}