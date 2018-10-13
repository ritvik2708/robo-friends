import React from "react"                      //react is necessary here for writing JSX
const Card=({id,name,email})=>{                //using tachyons for styling
    // const {id,name,email}=props;    using props as an argument to the function 
    // or can use {props.id} {props.name} {props.email}
    return(
        <div className="tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5"> 
            <img alt="" src={`https://robohash.org/${id}1234?size=200x200`}></img>
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    );
}

export default Card;