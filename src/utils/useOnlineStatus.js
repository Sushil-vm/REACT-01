import { useEffect ,useState} from "react";

const UseOnlineStatus= () => {
    
    const [onlineStatus,setOnlineStatus] = useState(true);

    // check if online
    useEffect(()=>{
        window.addEventListener("online",()=>{
            setOnlineStatus(true);;

        });
        window.addEventListener("offline",()=>{
            setOnlineStatus(false);

        });
    },[]);

    // Boolean value
    return onlineStatus;
};


export default UseOnlineStatus;