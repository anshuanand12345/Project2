import React, { useState } from 'react';
import './App.css';

const B = (props) => {
    const [ data, setdata ] = useState(props.cendol);

    const Incnum = () =>{
        setdata(10);
    };
  return (
    <div>
        <h2> {data} </h2>
        <button onClick={Incnum}> Button </button>
    </div>
  )
}

export default B;