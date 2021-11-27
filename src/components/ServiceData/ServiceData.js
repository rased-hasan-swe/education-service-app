import React from 'react';
import { Card, Col } from 'react-bootstrap';
import './ServiceData.css'

const ServiceData = (props) => {
    const {img,name,time,review}=props.service;
    return (
        <div>
            <Col id="card-data">
      <Card >
        <Card.Img variant="top" src={img} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>
             deration:{time}
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

export default ServiceData;