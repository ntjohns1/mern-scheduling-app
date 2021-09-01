import React from 'react';
import { useQuery } from '@apollo/client';
import { Card, Col, Container, Row, } from 'react-bootstrap';
import { GET_STUDENTS } from '../utils/queries';
import StudentList from './StudentList';

export default function StudentTable() {
    // populate table with list of students
    const { loading, data } = useQuery(GET_STUDENTS);
    const students = data?.users || [];
    return (
        <Container>
            <h3 className='text-center'>Welcome to Student Management!</h3>
            <h4 className='my-4 text-center'>View Current Students</h4>
            <div className='p-4 my-4 d-flex justify-content-center'>
                {loading ? (
                    <div>Loading...</div>
                ) : (
                    <div>
                        {students && students.map((student) => (
                            <StudentList students={student} key={student._id} />
                        ))}
                    </div>
                )}
            </div>
        </Container>
    )
}