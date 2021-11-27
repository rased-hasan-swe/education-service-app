import React from 'react';
import { Card,Col } from 'react-bootstrap';
import './Courses.css'

const Courses = (props) => {
    const{img,name,price,time,review}=props.course;
    return (
        <div>
            <Col id="card-style">
      <Card >
        <Card.Img variant="top" src={img} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>
            price: {price}
          </Card.Text>
          <Card.Text>
            course deration:{time}
          </Card.Text>
          <Card.Text>
           people review: {review}
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
        </div>
    );
};

export default Courses;