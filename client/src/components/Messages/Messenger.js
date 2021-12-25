import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { InputGroup } from "react-bootstrap";
import SelectStudent from '../SelectStudent';
import AddMessage from './AddMessage';
import MessageHistory from './MessageHistory';

export default function Messenger(props) {
    // console.log(props);
    const student = useSelector((state) => state.student);
    const [studentId, setStudentId] = useState('');

    useEffect(() => {
        setStudentId(student);
    }, [student]);

    return (
        <>
            <h3>Student Messenger</h3>
            <InputGroup>
                {/* <Form.Control
                    as="select"
                    name='selectStudent'
                    value={studentId}
                    onChange={(e) => setStudentId(e.target.value)}
                >
                    <option value=''> Select a Student </option>
                    {students.map((option) => (
                        <option value={option._id} key={option._id}>{option.username}</option>
                    ))}
                </Form.Control> */}
                <SelectStudent />
            </InputGroup>
            <MessageHistory studentId={studentId} setStudentId={setStudentId} />
            <AddMessage studentId={studentId} setStudentId={setStudentId} />
        </>
    )
}