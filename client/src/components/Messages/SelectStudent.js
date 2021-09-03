import React, { useState } from 'react';
import { useQuery } from "@apollo/client";
import { GET_STUDENTS } from '../../utils/queries';
import { InputGroup, Form, Button } from "react-bootstrap";
import AddMessage from './AddMessage';
export default function SelectStudent() {
    const { loading, data } = useQuery(GET_STUDENTS);
    const students = data?.users || [];
    const [studentId, setStudentId] = useState('');
    return (
        <>
            <InputGroup>
                <Form.Control
                    as="select"
                    name='selectStudent'
                    defaultValue='1'
                    value={studentId}
                    onChange={(e) => setStudentId(e.target.value)}
                >
                    <option value='1'> Select a Student </option>
                    {students.map((option) => (
                        <option value={option._id} key={option._id}>{option.username}</option>
                    ))}
                </Form.Control>
            </InputGroup>
            <AddMessage studentId={studentId} />
        </>
    )
}