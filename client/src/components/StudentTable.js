import React from 'react';
import { useQuery } from '@apollo/client';
import { Card, Container } from 'react-bootstrap';
import { GET_STUDENTS } from '../utils/queries';
import StudentList from './StudentList';

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
                {loading ? (
                    <div>Loading...</div>
                ) : (
                    <Card.Body>
                        {students && students.map((student) => (
                            <StudentList students={student} key={student.id} />
                        ))}
                    </Card.Body>
                )}
            </Card>
        </Container>
    )
}