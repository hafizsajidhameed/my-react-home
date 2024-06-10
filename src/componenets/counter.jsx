import React , {useState} from 'react';

export default function Counter(){
    // const count = 0;
    const [count, setCount] = useState(0);

    const increment = ()=> {
        setCount(count + 1);
    }
    const decrement = ()=> {
        setCount(count - 1);
    }

    return(
        <div>
            <h1>Count: {count}</h1>
            <button onClick={increment}>Click for adding</button>
            <button onClick={decrement}>Click for subtracting</button>
        </div>
    )
}
