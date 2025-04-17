import { useState } from "react";

const User = ({ name }) => {
    const [count] = useState(0);
    const [count2] = useState(1);

    useEffect(() =>{
      
    },[]);
    
    async function getUserInfo(){
      const data = await fetch(" https://api.github.com/users/USERNAME");
    }

  return (
    <div className="user-card">
        <h1>Count = {count}</h1>
        <h1>Count2 = {count2}</h1>
      <h2>Name:{name}</h2>
      <h3>Location:Bangalore</h3>
      <h4>Contact:@sushilkumar</h4>
    </div>
  );
};

export default User;
