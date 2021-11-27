import React from 'react';
import { Card, Col } from 'react-bootstrap';
import './catagories.css'

const Catagories = (props) => {
    const{img,name,course}=props.catagory;
    return (
        <div>
<Col id="card-img-style">
      <Card >
        <Card.Img variant="top" src={img} />
        <Card.Body>
          <Card.Title className="mx-2">{name}</Card.Title>
          <Card.Text  className="mx-2">
            Aveable now: {course}
          </Card.Text> 
        </Card.Body>
      </Card>
    </Col>
        </div>
    );
};

export default Catagories;