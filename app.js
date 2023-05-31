import React,{useState} from 'react';
const App=() =>{
    const[count , setCount]=useState(0);
    const increment = () =>{
        setCount(count-1);
    };
    return (
        <div>
            <h1>Props and State Management</h1>
            <p>count: {count}</p>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
            <childComponent message="Hello childComponent" />
        </div>
    );
};
const childComponent = (props) =>{
    return(
        <div>
            <p>{props.message}</p>
        </div>
    );
};
export default App;