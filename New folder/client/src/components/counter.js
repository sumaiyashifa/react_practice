import { useState } from "react";


function Counter (){
    let [count, setCount] = useState(0);

    function incrementCount () {
        setCount(++count);
    }

    function decrementCount (){
        if (count > 0){
            setCount(--count);
        }
        else{
            return;
        }
    }

    function resetCount (){
        count = 0;
        setCount(count);
    }

    return (
        <div className="counter">
            <h1>{count}</h1>
            <div className="btn-container">
             <button className="counter-button" onClick={decrementCount}>Decrement</button>  
             <button className="counter-button" onClick={resetCount}>reset</button> 
             <button className="counter-button" onClick={incrementCount}>Increment</button> 
            </div>
        </div>
    )
    
}

export default Counter;