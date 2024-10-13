import { useState } from "react";
const style = {
    color : "white",
    backgroundColor : "#0c0c0c",
    display : "flex",
    flexDirection: "column",
    gap : "10px",
    maxWidth: "fit-content",
    padding: "20px",
    borderRadius: "10px",
    border: "2px solid #fff",
    margin: "10px",
}
export function MyComponent() {

    const [name, setName] = useState('Manik');
    const updateName=()=>{
        setName("khan");
    }
 
    return (
        <div style={style}>
             <h1>Hi, {name}</h1>
             <button onClick={updateName}> set name</button>
        </div>
       
    );
    }
