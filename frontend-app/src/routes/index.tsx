import React, { useEffect, useState } from "react";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import { Client } from "@bidiffy/general-backend-sdk";
// import DashboardPage from "./DashboardPage";
const Home = React.lazy(() => import("./Home"));

const client = new Client();
client.configure();

//const App = ({ match }) => { 
const App = () => { 
 
  
  return (
  <div className="gx-main-content-wrapper">
    <Routes>
      <Route path="/" element={
        <React.Suspense fallback={<></>}>
          <Home />
        </React.Suspense>
      } />

  </Routes>
  </div >
)};

export default App;