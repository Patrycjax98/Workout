import React from "react";
import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar"
import Overview from "./pages/Overview";
import Plan from "./pages/Plan";
import Exercises from "./pages/Exercises";
import Home from "./pages/Home";
import OwnPlan from "./components/plans/OwnPlan";
import PreMadePlan from "./components/plans/PreMadePlan";
import FWB from "./components/plans/FWB";
import Training5x5 from "./components/plans/Training5x5";
import PushPullLegs from "./components/plans/PushPullLegs";
import HomeWorkout from "./components/plans/HomeWorkout";

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
          <Route path='/exercises'element={<Exercises/>}/>
          <Route path='/plan/OwnPlan'element={<OwnPlan/>}/>
          <Route path='/plan/PreMadePlan'element={<PreMadePlan/>}/>
          <Route path='/plan/PreMadePlan/FWB'element={<FWB/>}/>
          <Route path='/plan/PreMadePlan/Training5x5'element={<Training5x5/>}/>
          <Route path='/plan/PreMadePlan/PushPullLegs'element={<PushPullLegs/>}/>
          <Route path='/plan/PreMadePlan/HomeWorkout'element={<HomeWorkout/>}/>
      </Routes>
      </Sidebar>
       </div>
      </BrowserRouter>
  );
}

export default App;
