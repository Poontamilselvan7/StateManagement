import { useState } from "react";
function Cat(){
    let[count,setCount]=useState(0);
    let[name,setName]=useState("Tamil");
    return(
        <div>
            <h1>Count:{count}</h1>
            <button onClick={()=>setCount(count+1)}>+</button>
            <button onClick={()=>setCount(count-1)}>-</button><br />
            <input type="text" onChange={(event)=>setName(event.target.value)}/>
            <h1>Name:{name}</h1>
            
        </div>
    )
}


export default Cat;