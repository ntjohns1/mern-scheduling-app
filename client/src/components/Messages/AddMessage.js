import React, { useState } from 'react';
import { useQuery, useMutation } from "@apollo/client";
import { ADD_MESSAGE } from '../../utils/mutations';
import { GET_STUDENTS } from '../../utils/queries';
import { Form, Button } from "react-bootstrap";

export default function AddMessage() {
    const [addMessage] = useMutation(ADD_MESSAGE);
    const { loading, data } = useQuery(GET_STUDENTS);
    const students = data?.users || [];
    const [studentId, setStudentId] = useState();
    const [messageText, setMessageText] = useState('');
    console.log(studentId);
    console.log(messageText);

    const handleFormSubmit = async (event) => {
        event.preventDefault();
        try {
            await addMessage({
                variables: {
                    _id: studentId,
                    messageText: messageText
                },
            });
            alert("You Did It!");
        } catch (e) {
            console.error(e);
        }
        setStudentId();
        setMessageText('');

    }

    return (
        <Form onSubmit={handleFormSubmit}>
            <Form.Group>
                <Form.Control
                    as="select"
                    name='selectStudent'
                    value={studentId}
                    onChange={(e) => setStudentId(e.target.value)}
                >
                    <option disabled selected value> Select a Student </option>
                    {students.map((option) => (
                        <option value={option._id} key={option._id}>{option.username}</option>
                    ))}
                </Form.Control>
            </Form.Group>
            <Form.Group id="addMessage">
                <Form.Label></Form.Label>
                <Form.Control
                    as="textarea"
                    value={messageText}
                    onChange={(e) => setMessageText(e.target.value)}
                    style={{ height: '100px' }}
                />
            </Form.Group>
            <Button
                as='input'
                className='my-2'
                type='submit'
            // value='addLesson' 
            />
        </Form>
    )
}

