import React from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Feed from "./Feed";
import Login from "./Login"
import "./App.css";



function App() {
  const user=null;
  return (
    <div className="app">

    {!user ? (<Login /> )
    : (
      <>
      <Header />
      <div className="app__body">
        <Sidebar />
        <Feed />
        </div> 
      </>
    )}
    </div>
      
  );
}

export default App;