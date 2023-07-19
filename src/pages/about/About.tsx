import React from 'react'
import MainHead from '../../components/mainHeadPage/MainHead'
import logo from "./../../assets/Frame 168.png";
import MainFoot from '../../components/main-Foot/MainFoot';


const About = () => {
  return (
    <div className="about">
        <MainHead tiltle='About' para='about' />
        <div className="container">
            <div className="about-content" style={{textAlign: "center", padding: "20px"}}>
            <img src={logo} alt="" />
            <h2>WE ARE THE FUTURE</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore saepe totam sapiente dicta reprehenderit praesentium quibusdam cum accusantium eaque cupiditate quam architecto numquam error atque, quae cumque corporis libero ipsa!</p>
            </div>
        </div>
        <MainFoot />
    </div>
    )
}

export default About