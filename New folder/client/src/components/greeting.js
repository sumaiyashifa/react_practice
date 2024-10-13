 export function Greeting(props){
    const a1=<h2 className="hh">Welcome {props.username}</h2>
    const a2= <h2 className="hh">please log in to continue</h2>
    return(
        props.isLoggedIn ?a1 :a2
                           
    );
}