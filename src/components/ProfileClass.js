import React from "react";
import { json } from "react-router-dom";

class Profile extends React.Component {


async componentDidMount(){
        //To get api
      const data = await fetch(
        "https://api.github.com/users/karansingh36752"
      );
     console.log("component did mount")
      const json = await data.json();
      console.log(json);
      this.setState({
        userInfo : json,
       
    });

    }
    constructor(props){
        super(props);
        //Create state
        this.state ={
            userInfo:{
            name: "dummy_name",
            location: "dummylocation",
            avatar_url: "dummy_img"
           
        }, 
    };
     
console.log("constructor")    }

    render(){
       console.log("render")
        const{name,location,avatar_url} = this.state.userInfo //Destructring left side ke agaa wala "=" ke right me aur last wala element 
                                //{}- curly braces me
        return(
            <div>
                <h1>This is Ishpreet and class based component</h1>
                <img src={avatar_url} alt="profile pic"/>
                <h2>Name : {name}</h2>
                <h2>Location: {location}</h2>
               
                {/* <button onClick={()=> {
                    this.setState({
                        count: this.state.count+1
                    })
                    }}>
                        Count
                        </button> */}

            </div>
        )
    }
};

export default Profile;