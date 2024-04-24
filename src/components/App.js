import React from "react";
import TopMenu from "../components/TopMenu";
import SideMenu from "../components/SideMenu";
import MainContent from "../components/MainContent";



import "../index.css";




function App() {
  return ( 
      
  <div className="app-container">
    <MainContent/>
     
     <TopMenu />
    <SideMenu/>
    

 
  

  </div>
  );
}

export default App;
