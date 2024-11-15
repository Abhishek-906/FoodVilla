
import React from 'react';
import '../../swggy.css';
import team from "./assests/img/team.jpeg";
import BarManager from "./assests/img/BarManager.jpeg";
import Entre from "./assests/img/Entre.jpeg";
import headCheif from "./assests/img/headCheif.jpeg";
import host from "./assests/img/host.jpeg";
import PastryChief from "./assests/img/PastryChief.jpeg";
import PrepCook from "./assests/img/PrepCook.jpeg";

const About = () => {
    return (
        <>
        <section className="about-us">
            <div className="about-us-content">
                <div className="text-content">
                    <h2 style={{ color:"yellow" }}>About Us</h2>
                    <p className="subtitle" style={{ color:"blue" }} >Lorem ipsum dolor sit amet, consectetur adipisicing</p>
                    <p className="description" style={{ color:"blue" }}>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                    <button className="read-more-btn">Read More</button>
                    <div className="social-icons">
                        <a href="#" className="social-icon"><i className="fab fa-facebook-f"></i></a>
                        <a href="#" className="social-icon"><i className="fab fa-twitter"></i></a>
                        <a href="#" className="social-icon"><i className="fab fa-instagram"></i></a>
                    </div>
                </div>
                <div className="image-content" >
                    <img src={team} style={{ width: "700px", height: "500px" ,  marginLeft: "45px" }}  alt="About Us" />
                </div>
            </div>
        </section>


   <section id="team"  >
    
        <div className='aboutTeam'>
        <div class="div-40">
          <h1>Our Chefs</h1>
          <p>A chef is a culinary expert who masters flavors, techniques, and presentation. They craft delightful dishes with passion, precision, and creativity, transforming simple ingredients into unforgettable dining experiences.
          </p>
        </div> 

        <div class="div-20">
            <img src={PastryChief}></img>
        </div>

        <div class="div-20">
            <img src={headCheif}></img>
        </div>

        <div class="div-20">
            <img src={Entre}></img>
        </div>

       
        
        </div>

        <div className='aboutTeam'>
        <div class="div-40">
           <h1>Our staff</h1>
           <p>
           Restaurant staff are the backbone of any dining experience, ensuring smooth operations and exceptional service. From chefs to servers, each member contributes to creating memorable meals and customer satisfaction.</p>
        </div>

        <div class="div-20">
            <img src={BarManager}></img>
        </div>

        <div class="div-20">
            <img src={host}></img>
        </div>

        <div class="div-20">
            <img src={PrepCook}></img>
        </div> 

        </div>

        </section>

        </>
    );
}

export default About;
