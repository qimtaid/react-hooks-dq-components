import React from "react";
import TopMenu from "../components/TopMenu";
import SideMenu from "../components/SideMenu";
import AlbumCard from "../components/AlbumCard";
import AlbumList from "../components/AlbumList";
import GenrePicker from "../components/GenrePicker";
import Logo from "../components/Logo";
import MainContent from "../components/MainContent";
import MenuLinks from "../components/MenuLinks";
import Search from "../components/Search";


import "../index.css";




function App() {
  return ( 
      
  <div className="app-container">
    <MainContent/>
     <Logo/>
     <TopMenu />
    <SideMenu/>
     <MenuLinks/>
    <Search/>
    <AlbumCard/>
  <AlbumList/>
  <GenrePicker/>
 
  

  </div>
  );
}

export default App;
