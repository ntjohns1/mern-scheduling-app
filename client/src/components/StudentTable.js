import React, { useState } from 'react';
import { useQuery } from '@apollo/client';
import { GET_STUDENTS } from '../utils/queries';
import { Card, Container, Table, Button } from 'react-bootstrap';

export default function StudentTable() {
    // populate table with list of students
    const { loading, data } = useQuery(GET_STUDENTS);
    const students = data?.users || [];
    return (
        <Container>
                    <h3 className='text-center'>Welcome to Student Management!</h3>
            <Card className='p-4 my-4'>
                <Card.Header>
                    <h4>View Current Students</h4>
                </Card.Header>
                <Card.Body>
                    <Table responsive>
                        <thead>
                            <tr>
                                <th scope="col"></th>
                                <th scope="col">Username</th>
                                <th scope="col">Email</th>
                                <th scope="col"></th>
                                <th scope="col"></th>
                                <th scope="col"></th>
                            </tr>
                        </thead>
                        <tbody>
                            {students.map((student) => (
                                <tr>
                                    <th scope="row" className="update-studentId" value={student._id}></th>
                                    <td><textarea className="update-username" placeholder={student.username}></textarea></td>
                                    <td><textarea className="update-email" placeholder={student.email}></textarea></td>
                                    <td><Button
                                        variant='info'
                                        value="{{user.id}}"
                                        type="button">
                                        Update
                                    </Button></td>
                                    <td><Button
                                        variant='danger'
                                        value="{{user.id}}"
                                        type="button">
                                        Delete
                                    </Button></td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                </Card.Body>

            </Card>

        </Container>
    )
}