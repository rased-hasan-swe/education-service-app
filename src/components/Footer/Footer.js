import React from 'react';
import './Footer.css';
import icon from "../../images/icone.jpg"

const Footer = () => {
    return (
        <>
        <div className="">
<div id="footer" className="text-white d-flex align-items-center justify-content-center">
  <div className="row  container p-3  ">
    <div className="col-md-4">
    
        <h3 className="my-3"><img src={icon} alt="h"></img> RasedAcademy</h3>
        <p className="componentOne">We are providing high-quality online courses for about ten years. 
            Our all instructors expert and highly experienced. 
            We provide all kinds of course materials to our students</p>
            <h5>Follow Us</h5>
            <div id="icon-style">
            <i className="fab fa-facebook-square"></i> 
            <i className="fab fa-twitter"></i>
            <i class="fab fa-instagram"></i>
            <i class="fab fa-invision"></i>
            </div>
    </div>
    <div className="col-md-4 "id="catagory">
        <h3 className="my-3">Categories</h3>
        <ul>
            <li>Business</li>
            <li>Design</li>
            <li>Development</li>
            <li>Marketing</li>
            <li>Photography</li>
            <li>Business</li>
        </ul>
    </div>
    <div className="col-md-4" id="contruct-icon">
       <h3 className="my-3">Contruct Us</h3>
       <p><i class="fas fa-map-marker-alt"></i>250/A Oval Street,london</p>
       <p><i class="fas fa-envelope"></i>support@example.com</p>
       <p><i class="fas fa-phone"></i>+98 12345 67890</p>
       <p>Feel free to contruct us</p>
    </div>
    
    
  </div>
</div>

        </div>
        
        </>
       
    );
};

export default Footer;