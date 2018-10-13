import React from "react";
const Scroll=(props)=>{
    // console.log(props);
    return (
        <div style={{overflowY:"scroll",border:"1px solid black",height:"500px"}}> {/*two curly braces as one is for JS and inner one for an object*/}
            {props.children}
        </div>      //props contains its children array which contains the props of all its children respectively
    );
}
export default Scroll;