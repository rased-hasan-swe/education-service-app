import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import imgB from '../../images/about-img-1.jpg';
import imgA from '../../images/img-lg-2.jpg';
import imgC from '../../images/about-img-3.jpg';
import './About.css'

const About = () => {

    return (
        <div>
            <h1 className="text-center p-5 mt-4"> About Us </h1>
            <div className="container mb-5">
            <Row id="card-box" xs={1} md={3} className="g-4  ">
            <Col>
      <Card className="mt-5 cart-s">
        <Card.Img variant="" src={imgB} />
        
      </Card>
    </Col>
    <Col>
      <Card className="cart-s">
        <Card.Img variant="mb-5" src={imgA} />
        
      </Card>
    </Col>
    <Col>
      <Card className="mt-5 cart-s">
        <Card.Img variant="" src={imgC} />
       
      </Card>
    </Col>
</Row>
 </div>
 <div>
     <h5 className="text-center">WHO WE ARE</h5>
     <h2 className="text-center container"> We Are Providing The Best Quality Online Courses. <br />
     Our All Instructors Are High Expert </h2>
 </div>

</div>
    );
};

export default About;