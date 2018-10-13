import React from "react";//destructuring component as in case of object i.e we are importing React.Component
import "./hello.css"
const Hello= (props)=>{
    return (
        <div className="f1 tc">
            <h1>Hello World</h1>
            <p>{props.greeting}</p>
        </div>);
}
// class Hello extends Component{
//     render(){
//         return (
//         <div className="f1 tc">
//             <h1>Hello World</h1>
//             <p>{this.props.greeting}</p>
//         </div>);
//     }
// }
export default Hello;
