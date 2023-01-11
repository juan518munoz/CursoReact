import {useEffect, useState} from "react";
import {useForm} from "../Hooks/useForm";

export const FormWithCustomHook = () => {

    const { formState, onInputChange, onResetForm, username, email, password }
    = useForm({
        username: '',
        email: '',
        password: '',
    });

    return (
        <>
            <hr />
            <h1>Form With Custom Hook</h1>
            <input
                type={"text"}
                className={"form-control"}
                placeholder={"Username"}
                name={"username"}
                value={username}
                onChange={onInputChange}
            />

            <input
                type={"email"}
                className={"form-control mt-2"}
                placeholder={"user@email.com"}
                name={"email"}
                value={email}
                onChange={onInputChange}
            />

            <input
                type={"password"}
                className={"form-control mt-2"}
                placeholder={"Password"}
                name={"password"}
                value={password}
                onChange={onInputChange}
            />

            <button onClick={onResetForm} className={"btn btn-primary mt-2"}>Borrar</button>
        </>
    )
}