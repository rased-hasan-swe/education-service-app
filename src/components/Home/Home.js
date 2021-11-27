import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import {  NavLink } from 'react-router-dom';
import web from "../../images/web.jpg";
import Catagories from '../Catagories/Catagories';
import Courses from '../Courses/Courses';
import  './Home.css';
import imgQ from '../../images/instructor-1-1.jpg';
import imgR from '../../images/instructor-2-1.jpg';
import imgk from '../../images/instructor-3.jpg';
import imgJ from '../../images/instructor-4-1.jpg';



const Home = () => {
    const [catagories,setCatagories]=useState([]);
    const[courses,setCourses]=useState([]);
    useEffect(()=>{
        fetch('./fackDataONE.json')
        .then(res=>res.json())
        .then(data=>setCatagories(data.catagory))
    },[]);

    useEffect(()=>{
        fetch('./fackDataONE.json')
        .then(res=>res.json())
        .then(data=>setCourses(data.course))
    },[]);

    
    return (
        
        <>
        <section id="header"className="d-flex align-items-center justify-content-center">
        <div className="container-fluid nav_bg">
            <div className="row">
              <div className="col-10 mx-auto">
              <div className="row">
                  <div id="header-style"className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 "> 
                  
                      <h1 className="mt-5"> 
                          grow your bassic learning with <strong className="brand-name">RasedAcademy</strong>

                      </h1>
                      <h2 className="my-3">
                          we are the team of talented developer making websites
                      </h2>
                      <div className="mt-3">
                       <NavLink to="/services"className="btn-get-started">
                           Get started
                       </NavLink>
                      </div>
                      </div>
                      <div className="col-lg-6 order-1 ordegr-lg-2 header-img mt-5">
                          <img src={web} className=" img-fluid "alt="" />
                      </div>
                  </div>
              </div>
            </div>

        </div>
        </section>
        <section id="catagories">
            <h6 className="text-center mt-5 "> CATEGORIES  </h6>
            <h3 className="text-center mb-5">Popular Categories</h3>
            <div>
                <div className="container mt-4">
                <Row xs={1} md={4} className="g-4 "> 
                {
                  catagories.map(catagory=><Catagories 
                  key={catagory.key}
                  catagory={catagory}>

                  </Catagories>)
                }
                </Row>
                </div>
                
            </div>
        </section>
        <section id="courses">
            <h6 className="text-center mt-5"> COURSES  </h6>
            <h3 className="text-center mt-3 mb-5">Explore Popular Courses</h3>
           <div>
               <div className="container mt-4">
               <Row xs={1} md={3} className="g-4 "> 
                {
                  courses.map( course=><Courses 
                    key={course.key}
                    course={course}
                    
                    ></Courses>)
                }
                </Row>
               </div>
           </div>
        </section>
        <section>
            
           <div className="container">
           <div className=" m-5">
                <h1 className="text-center p-4 mb-4"> Our Expert Instructors </h1>
            <Row xs={1} md={4} className="g-5">
            <Col>
      <Card className="">
        <Card.Img variant="" src={imgQ} />
        <Card.Text className="text-center p-3">
        <strong> Shane Warne </strong> <br />
        Instructor
        </Card.Text>
      </Card>
    </Col>
    <Col>
      <Card className="">
        <Card.Img variant="" src={imgR} />
        <Card.Text className="text-center p-3">
       <strong>Avelina Smith </strong><br />
        Instructor
        </Card.Text>
      </Card>
    </Col>
    <Col>
      <Card className="">
        <Card.Img variant="" src={imgJ} />
        <Card.Text className="text-center p-3">
        <strong> John Bond </strong><br />
        Instructor
            </Card.Text>
      </Card>
    </Col>
    <Col>
      <Card className="">
        <Card.Img variant="" src={imgk} />
        <Card.Text className="text-center p-3">
        <strong> Sophia Smith </strong><br />
        Instructor
            </Card.Text>
      </Card>
    </Col>
</Row>
            </div>
           </div>
        
        </section>
        </>
    );
};

export default Home;

