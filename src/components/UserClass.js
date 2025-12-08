import React from "react";
import UserContext from "../utils/UserContext";
class UserClass extends React.Component{
    constructor(props){
        super(props);
        this.state={
           userInfo:{
            name:"",
            location:""
           }
        },
        console.log("constructor")
    }
   async componentDidMount(){
        const data=await fetch("https://api.github.com/users/gomasanisivasankar")
        const json=await data.json()
        this.setState({
            userInfo:json,
        })
    }
    componentDidUpdate(){
        // console.log("Component did Update")
    }
    componentWillUnmount(){
        // console.log("component will unmount")
    }
    render(){
        const {login,location,avatar_url}=this.state.userInfo;
      
        return (
            <div className='user-card'>
                <div>
                    <UserContext.Consumer>
                        {({loggedInUser})=><h2>{loggedInUser}</h2>}
                    </UserContext.Consumer>
                </div>
                <img src={avatar_url}/>
                <h2>Name:{login}</h2>
                <h3>Location:{location}</h3>
                <h4>Contact:ssankar6281@gmaiil.com</h4>
            </div>
          )
    }
}
export default UserClass;
