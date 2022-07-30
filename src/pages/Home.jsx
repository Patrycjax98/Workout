import React from "react";
import {NavLink} from "react-router-dom";
import {VscNotebook} from "react-icons/vsc";
import {CgGym} from "react-icons/cg";
import {AiOutlineArrowRight, AiOutlineArrowLeft, AiOutlineArrowDown} from "react-icons/ai"
import '../components/home.css'

const Home = () => {



    return (
        <div style={{display:'flex', flexDirection:'column'}}>
            <div style={{display:'flex', justifyContent:'space-evenly', marginBottom:'100px'}}>
                <div className='home_box'>
                    <div className='home_title1'>
                        <div className='home_titleText1'>How to make your own workout plan</div>
                        <AiOutlineArrowRight style={{marginRight:'40px'}}/>
                    </div>
                    <div style={{display:'flex', flexDirection:'column', alignItems:'center'}}>
                        <div style={{fontSize:'24px', marginTop:'40px',color:'#87888C', marginBottom:"20px"}}>
                            Make your own plan
                        </div>
                        <NavLink to={'/plan/OwnPlan'}>
                            <VscNotebook style={{fontSize:'70px',color:'#387BFF'}}/>
                        </NavLink>
                    </div>
                </div>
                <div className='home_boxImg'>
                    <iframe
                        src="https://www.youtube.com/embed/5iHQDUvR_vc"
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        style={{width:'500px', height:300}}
                    />
                </div>
            </div>
            <div style={{display:'flex', justifyContent:'space-evenly'}}>
                <div className='home_boxImg'>
                    <iframe
                        src="https://www.youtube.com/embed/CkoWGLBRsR4"
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        style={{width:'500px', height:300}}
                    />
                </div>
                <div className="home_box">
                    <div className='home_title2'>
                        <div className='home_title2a'>
                            <AiOutlineArrowLeft style={{marginLeft:'40px'}}/>
                            <div className='home_titleText2'>Example plans</div>
                        </div>
                        <AiOutlineArrowDown/>
                    </div>
                    <div className='home_nav'>
                        <NavLink to={'/plan/PreMadePlan/FWB'} style={{display:'flex', justifyContent:"flex-start",alignItems:"center", margin:'15px',fontSize:'30px', color:'#387BFF'}}>
                            <CgGym style={{ backgroundColor:'#387BFF', color:'#000000', borderRadius:'7px', padding:'2px', marginRight:'15px'}}/>
                            <div>FWB</div>
                        </NavLink>
                        <NavLink to={'/plan/PreMadePlan/Training5x5'} style={{display:'flex', justifyContent:"flex-start",alignItems:"center", margin:'15px',fontSize:'30px', color:'#387BFF'}}>
                            <CgGym style={{ backgroundColor:'#387BFF', color:'#000000', borderRadius:'7px', padding:'2px', marginRight:'15px'}}/>
                            <div>Training5x5</div>
                        </NavLink>
                        <NavLink to={'/plan/PreMadePlan/PushPullLegs'} style={{display:'flex', justifyContent:"flex-start",alignItems:"center", margin:'15px',fontSize:'30px', color:'#387BFF'}}>
                            <CgGym style={{ backgroundColor:'#387BFF', color:'#000000', borderRadius:'7px', padding:'2px', marginRight:'15px'}}/>
                            <div>PushPullLegs</div>
                        </NavLink>
                        <NavLink to={'/plan/PreMadePlan/HomeWorkout'} style={{display:'flex', justifyContent:"flex-start",alignItems:"center", margin:'15px',fontSize:'30px', color:'#387BFF'}}>
                            <CgGym style={{ backgroundColor:'#387BFF', color:'#000000', borderRadius:'7px', padding:'2px', marginRight:'15px'}}/>
                            <div>Home Workout</div>
                        </NavLink>
                    </div>
                </div>
            </div>
        </div>


    )
}

export default Home;

