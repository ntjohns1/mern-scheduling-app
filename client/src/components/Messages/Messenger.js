import React, { useState } from 'react';
import { InputGroup } from "react-bootstrap";
import SelectStudent from '../SelectStudent';
import AddMessage from './AddMessage';
import MessageHistory from './MessageHistory';
export default function Messenger(props) {
    // console.log(props);
    const [studentId, setStudentId] = useState('');
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
                <SelectStudent studentId={studentId}/>
            </InputGroup>
            <MessageHistory studentId={studentId} setStudentId={setStudentId} />
            <AddMessage studentId={studentId} setStudentId={setStudentId} />
        </>
    )
}