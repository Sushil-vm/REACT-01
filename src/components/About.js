import User from "./User";
import UserClass from "./UserClass";
import { Component } from "react";
import userContext from "../utils/UserContext";

class About extends Component {
    constructor(props){
        super(props);
        // console.log("Parent Constructor");
    }


    componentDidMount(){
        // console.log("Parent Component DidMount");
    }
    render(){
        // console.log("Parent Render");

        return(
            <div>
                <h1>About Page</h1>
                <div>
                    loggedIn User
                    <userContext.Consumer>
                        {({loggedInUser})=>(<h1 className="text-xl font-bold">{loggedInUser}</h1>)}
                    </userContext.Consumer>
                </div>
                <h2>This How React-Router Works</h2>
                {/* <User name= {"SushilKumar (this functional component)"}/> */}
                <UserClass name={"first (this class based component)"} location={"Bangalore"}/>
            </div>
        )
    }
}



/* 
- Parent Constructor
- Parent Render
    -first Constructor
    -first Render

    -second Constructor
    -second Render

    <DOM UPDATE - in Single Batch>

    -first DidMount Component
    -second DidMount Component

-Parent Component DidMount
*/

// const About =()=>{
//     return(
//         <div>
//             <h1>About Page</h1>
//             <h2>This How React-Router Works</h2>
//             {/* <User name= {"SushilKumar (this functional component)"}/> */}
//             <UserClass name={"Sushil Kumar (this class based component)"} location={"Bangalore"}/>
//         </div>
//     );
// };

export default About;
