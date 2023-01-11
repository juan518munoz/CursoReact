import {useEffect, useState} from "react";
import {Message} from "./Message";

export const SimpleForm = () => {
    const [ formState, setFormState ] = useState({
        username: 'jmm',
        email: 'jmm@gmail.com'
    })
    const { username, email } = formState;

    const onInputChange = ({target}) => {
        const {name, value} = target;
        setFormState({
            ...formState,
            [ name ]: value,
        })
    }

    /*useEffect( () => {
        console.log('useEffect called! formState changed!')
    }, [formState]);

    useEffect( () => {
        console.log('email changed!')
    }, [email]);*/

    return (
        <>
            <hr />
            <h1>Simple Form</h1>
            <input
                type={"text"}
                className={"form-control"}
                placeholder={"Username"}
                name={"username"}
                value={username}
                onChange={onInputChange}
            />
            {
                username === 'jmm' && <Message/>
            }

            <input
                type={"email"}
                className={"form-control mt-2"}
                placeholder={"user@email.com"}
                name={"email"}
                value={email}
                onChange={onInputChange}
            />

        </>
    )
}