import React,{Component} from "react";
import CardList from "../components/CardList";
// import {robots} from "./robots";     //beacuse robots does not have a single default export
import SearchBox from "../components/SearchBox";
import Scroll from "../components/scroll";
// import "./App.css";
class App extends Component{
    constructor(){
        super();
        this.state={
            robots:[],
            searchVal:""
        }
        // console.log(1);          //to check the order of the execution of the component mounting methods
    }
    onSearchChange=(event)=>{       //not using normal functions as it messes up with this.In case of a normal function this would
        this.setState({searchVal: event.target.value});     // refer to the object in which the event occurs which is the input component 
    }
    componentDidMount(){            //evoked after render when a component is mounted on a page.A component method hence we do not need to use arrow functions
        fetch("https://jsonplaceholder.typicode.com/users")
        .then(response => response.json())
        .then(users=>this.setState({robots:users})); 
        // console.log(2);               
    }
    render(){
        // console.log(3); 
        const {robots}=this.state;
        const filterdRobots=robots.filter(robot=>{
            return robot.name.toLowerCase().includes(this.state.searchVal.toLowerCase());
        });
        if(robots.length===0){
            return <h1 className="heading">LOADING</h1>;
        }
        return(
            <div className="tc">
                <h1 className="heading" title="YOUR ROBOTIC FRIENDS">ROBOFRIENDS</h1>
                <SearchBox searchChange={this.onSearchChange}/>
                <Scroll type="dynamic">
                    <CardList type="cards" robots={filterdRobots}/>
                </Scroll>
            </div>
        );
    }
}
export default App;