import React, { useState,useEffect } from 'react';
import {Table,Container, Form,Button, FormControl} from 'react-bootstrap';
import {NavLink} from "react-router-dom";

const Employee = () => {

    const[employees,setEmployees] = useState([]);

    const [displayEmployees , setDisplayEmployees] = useState([]);

    //handle for receive input box element

    const handleSearch = (event) =>{
        const searchValue = event.target.value.toLowerCase();
        const matchEmployee = employees.filter(employee => employee.name.toLowerCase().includes(searchValue));

        setDisplayEmployees(matchEmployee);
    }


    useEffect(() =>{
        fetch('/employeeData.json')
        .then(res => res.json())
        .then(data => {
            setEmployees(data)
            setDisplayEmployees(data)
        })
    },[])

    return (
        <Container>
            <Form className="d-flex m-4">
            <FormControl
              type="search"
              placeholder="Search"
              className="me-2 search"
              aria-label="Search"
              onChange={handleSearch}
            />
          </Form>

            <Table striped bordered hover size="sm">
                <thead>
                    <tr>
                    <th>ID</th>
                    <th>Image</th>
                    <th>Name</th>
                    <th>Designation</th>
                    <th>Details</th>
                    </tr>
                </thead>
                <tbody>

                    {
                        displayEmployees?.map(employee =>(
                            <tr key={employee.id}>
                                <td >{employee?.id}</td>
                                <td>image : </td>
                                <td>{employee?.name}</td>
                                <td>{employee?.designation}</td>
                                <td>
                                    <NavLink to= { `/employee/${employee?.id}` }>
                                        Details
                                    </NavLink>
                                </td>
                            </tr>
                        ))
                    }

                </tbody>
            </Table>
        </Container>
    );
};

export default Employee;