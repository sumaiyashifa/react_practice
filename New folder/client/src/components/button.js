export function Button(){
    // let c=0;

    // const handleClick =() => console.log("OUCH!");
    // const handleclick2 =(name) => {
    //     if(c<3){
    //         c++;
    //         console.log(`${name} you clicked me ${c} times`);
    //     }
    //     else{
    //         console.log(`${name} stop clicking me`);
    //     }
    // }
        
    // return (<button onClick={()=>handleclick2("khan")}>click me </button>);
    const changeName = (e) => {
        e.target.innerText = "Its works🙀";
        e.target.style.backgroundColor = "darkgreen";
    }
    return (
        <button onDoubleClick={changeName} className="secondaryBtn">Button</button>
    )
}