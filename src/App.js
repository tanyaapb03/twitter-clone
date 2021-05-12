import React from "react";
import Sidebar from "./Sidebar";
import"./App.css";
import Feed from "./Feed";
import Widget from "./Widget";






export default function App() {
  return (
    <div className="app">

       <Sidebar/> 
       <Feed/>
       <Widget/>

       {/*feed*/}
       {/* widget */}
      
    </div>
    
    

    );
}

