import logo from './logo.svg';
import './App.css';
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
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
        BIDIF ADMIN SAYS : {helloVal}
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
