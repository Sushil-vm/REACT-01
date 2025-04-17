import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userInfo: {
        name: "Dummy",
        Location: "Default",
      },
      // count :0,
      // count2:2,
    };
    // console.log(props);
    // console.log(this.props.name +"Child Constructor");
  }
 
  async componentDidMount() {
    

    this.timer = setInterval(() =>{
      console.log("Interval Called and Run s infinit times")
    },1000);

    // * API call
    const data = await fetch(" https://api.github.com/users/Sushil-vm");
    const json = await data.json();

    this.setState({
      userInfo: json,
    });
 
    // console.log(json);

    // console.log(this.props.name + "Child Component DidMount")
  }


  componentWillUnmount(){
    clearInterval(this.timer);
    // console.log("componentWil lUnmount");
  }

  render() {
    // console.log( this.props.name + "Child Render");
    const { name, location, created_at,avatar_url } = this.state.userInfo;
    // const {count,count2} = this.state;

    return (
      <div className="user-card">
        <h2>Name:{name}</h2>
        <img src={avatar_url} />
        <h3>Location:{location}</h3>
        <h3>Created On:{created_at}</h3>
       
        <h4>Contact:@sushilkumar</h4>
      </div>
    );
  }
}

export default UserClass;

{
  /* <h1>Count:{count}</h1>
            <button onClick={() =>{
                this.setState({
                    count:this.state.count+1,
                    count2:this.state.count2+1,
                })
            }}
            >
                Count Increase
            </button>
            <h1>Count2:{count2}</h1> */
}
 