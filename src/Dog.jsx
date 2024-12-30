import React from "react";
function Dog(value){
    return(
        <>
        <h1>
            This is Dog.
        </h1>
        <h1>Dog name is {value.name}.</h1>
        <h1>{value.name} runs fast.</h1>
        </>
    )
}


export default Dog;