import React, { useEffect, useState } from "react";
import { Client } from "@bidiffy/general-backend-sdk";

const client = new Client();
client.configure();

const Home = () => {
  
    const [helloVal,setHelloVal] = useState('')

    const GetHelloApi = async () =>{
      client.sayHello().then((res:string)=>{
        setHelloVal(res)
  
      }).catch((err:any)=>console.error(err))
    }
    useEffect(() => {
      
  
  
    }, [])
  
    return (
      <div className="" >
        <h1> Starter Page. {helloVal}</h1>
      </div>
    );
  };

export default Home;