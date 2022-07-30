import React from "react";
import {NavLink} from "react-router-dom";
import {VscNotebook} from "react-icons/vsc";
import {CgGym} from "react-icons/cg";
import {AiOutlineArrowRight, AiOutlineArrowLeft, AiOutlineArrowDown} from "react-icons/ai";

const Home = () => {



    return (
        <div style={{display:'flex', flexDirection:'column'}}>
            <div style={{display:'flex', marginBottom:'50px'}}>
                <div>
                    <div>
                        <div>How to make your own workout plan</div>
                        <AiOutlineArrowRight/>
                    </div>
                    <div>
                        <div>
                            Make your own plan
                        </div>
                        <NavLink to={'/plan/OwnPlan'}>
                            <VscNotebook/>
                        </NavLink>
                    </div>
                </div>
                <div>
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
            <div style={{display:'flex'}}>
                <div>
                    <iframe
                        src="https://www.youtube.com/embed/CkoWGLBRsR4"
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        style={{width:'500px', height:300}}
                    />
                </div>
                <div>
                    <div>
                        <div>
                            <AiOutlineArrowLeft/>
                            <div>Example plan</div>
                        </div>
                        <AiOutlineArrowDown/>
                    </div>
                    <div>
                        <NavLink to={'/plan/PreMadePlan/FWB'}>
                            <CgGym/>
                            <div>FWB</div>
                        </NavLink>
                        <NavLink to={'/plan/PreMadePlan/Training5x5'}>
                            <CgGym/>
                            <div>Training5x5</div>
                        </NavLink>
                        <NavLink to={'/plan/PreMadePlan/PushPullLegs'}>
                            <CgGym/>
                            <div>PushPullLegs</div>
                        </NavLink>
                        <NavLink to={'/plan/PreMadePlan/HomeWorkout'}>
                            <CgGym/>
                            <div>PushPullLegs</div>
                        </NavLink>
                    </div>
                </div>
            </div>
        </div>


    )
}

export default Home;

