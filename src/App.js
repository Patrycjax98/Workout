import React from "react";
import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar"
import Overview from "./pages/Overview";
import Plan from "./pages/Plan";
import AtlasWorkout from "./pages/AtlasWorkout";
import Home from "./pages/Home";

function App() {
  return (
      <BrowserRouter>
       <div className='main_view'>
       <Sidebar>
       <Navbar/>
      <Routes>
          <Route path='/'element={<Home/>}/>
          <Route path='/home'element={<Home/>}/>
          <Route path='/overview'element={<Overview/>}/>
          <Route path='/plan'element={<Plan/>}/>
          <Route path='/atlasWorkout'element={<AtlasWorkout/>}/>
      </Routes>
      </Sidebar>
       </div>
      </BrowserRouter>
  );
}

export default App;
