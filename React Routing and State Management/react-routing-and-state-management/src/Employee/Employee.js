import React, { useState,useEffect } from 'react';
import {Table,Container} from 'react-bootstrap';
import {NavLink} from "react-router-dom";

const Employee = () => {

    const[employees,setEmployees] = useState([]);

    useEffect(() =>{
        fetch('/employeeData.json')
        .then(res => res.json())
        .then(data => setEmployees(data))
    },[])//[dependency]

    return (
        <Container>
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
                        employees.map(employee =>(
                            <tr>
                                <td>{employee?.id}</td>
                                <td>image : </td>
                                <td>{employee.name}</td>
                                <td>{employee.designation}</td>
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