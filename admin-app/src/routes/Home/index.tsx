import logo from './logo.svg';
import '../../App.css';
import React, { useEffect, useState } from "react";

import { Client } from "@bidiffy/general-backend-sdk";

const client = new Client();
client.configure();




function App() {
  const [helloVal,setHelloVal] = useState('...  Waiting ')

  const GetHelloApi = async () =>{
  client.sayHello().then((res:string)=>{
      setHelloVal(res)

    }).catch((err:any)=>console.error(err))
  }
  useEffect(() => {
    GetHelloApi()
  }, [])

  return (
    <div className="App">
      <header className="App-header1">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
        BIDIF ADMIN SAYS : {helloVal}
        </p>
     
      </header>
    </div>
  );
}

export default App;
