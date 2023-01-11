import {useState} from "react";

export const useCounter = (initialValue = 0) => {
    const [counter, setCounter] = useState(initialValue);

    const incrementar = (value = 1) => {
        setCounter(counter + value);
    }

    const reducir = (value = 1) => {
        setCounter(counter - value);
    }

    const resetear = () => {
        setCounter(initialValue);
    }

    return {
        counter,
        incrementar,
        reducir,
        resetear,
    }
}