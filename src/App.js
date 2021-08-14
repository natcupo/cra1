import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
    let counter = 5;
    const [count, setCount] = useState(5);

    const add = () => {
        //counter = counter + 1;
        setCount (count + 1)
    console.log('ADD ONE', counter);
    }
    const minus = () => {
        //counter = counter - 1;
        setCount(count - 1)
        console.log('MINUS ONE', counter);
    }
    return (
        <div>
         <button onClick={add}>Add 1</button>

             {count}

            <button onClick={minus}>Minus 1</button>
        </div>
    );
}

export default App;
