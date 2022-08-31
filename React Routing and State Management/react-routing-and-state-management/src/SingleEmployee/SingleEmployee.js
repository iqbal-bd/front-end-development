import React, { useState, useEffect } from 'react';

import {
    Container,
    Card,
    ListGroup
    } from 'react-bootstrap';

import {useParams} from 'react-router-dom';

import "./singleEmployee.css";

const SingleEmployee = () => {

    let {id} = useParams();
   
    const [employeeDetails, setEmployeeDetails] = useState([]);

    const [singleEmployee,setSingleEmployee] = useState({});

    useEffect(() =>{
        fetch('/employeeDetails.json')
        .then(res => res.json())
        .then(data => setEmployeeDetails(data.employee))
    },[]) 

    useEffect(() =>{
        const foundEmployee = employeeDetails.find(employee =>{ return employee.login.id === id;})
        setSingleEmployee(foundEmployee)
    },[employeeDetails])

    return (
        <Container className="card">
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={singleEmployee?.picture?.thumbnail} />
                <Card.Body>
                    <Card.Title>{singleEmployee?.name}</Card.Title>
                    {/* <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                     </Card.Text> */}
                </Card.Body>
                <ListGroup className="list-group-flush">
                    <ListGroup.Item>Email: {singleEmployee?.email}</ListGroup.Item>
                    <ListGroup.Item>Phone: {singleEmployee?.phone}</ListGroup.Item>
                    <ListGroup.Item className="text-primary">
                        Location <br/> street-{singleEmployee?.location?.street}<br/> And
                                  city-{singleEmployee?.location?.city}
                    </ListGroup.Item>
                    
                </ListGroup>
                {/* <Card.Body>
                    <Card.Link href="#">Card Link</Card.Link>
                    <Card.Link href="#">Another Link</Card.Link>
                </Card.Body> */}
            </Card>
        </Container>
    );
};

export default SingleEmployee;