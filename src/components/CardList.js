import React from "react";
import Card from "./robo";
const CardList=({robots})=>{
    // const allCards=robots.map((user,i)=>{
    //     return <Card key={i} id={user.id} name={user.name} email={user.email}/>;
    // });
    // return(
    //     <div>
    //         {allCards}
    //     </div>        
    // );
    return(
        <div>
            {
                robots.map((user,i)=>{
                    return <Card key={i} id={user.id} name={user.name} email={user.email}/>;
                })
            }
        </div>
    )
}
export default CardList;
