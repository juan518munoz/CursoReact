import React from "react";
import { useState } from 'react'
import PropTypes from "prop-types";

export const CounterApp = ({value}) => {
    const [ counter, setCounter ] = useState(value)

    const masUno = () => {
        //console.log('+1');
        setCounter( (c) => c+1 )
    }

    const menosUno = () => {
        //console.log('-1');
        setCounter( (c) => c-1 )
    }

    const resetDefault = () => {
        //console.log('Default');
        setCounter( (c) => value )
    }

    return (
      <>
          <h1>CounterApp</h1>
          <p>{ counter }</p>

          <button onClick={ masUno }>+1</button>
          <button onClick={ menosUno }>-1</button>
          <button onClick={ resetDefault }>Reset</button>
      </>
    )
}

CounterApp.propTypes = {
    value: PropTypes.number
}