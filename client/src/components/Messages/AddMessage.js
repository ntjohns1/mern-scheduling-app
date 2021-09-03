import React, { useState } from 'react';
import { useMutation } from "@apollo/client";
import { ADD_MESSAGE } from '../../utils/mutations';
import { Form, Button } from "react-bootstrap";

export default function AddMessage({ studentId }) {
    const [addMessage] = useMutation(ADD_MESSAGE);
    const [messageText, setMessageText] = useState('');
    console.log(studentId);
    const handleFormSubmit = async (event) => {
        event.preventDefault();
        if (studentId) {
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
            setMessageText('');
        }
        alert('Select a Student')
    }

    return (
        <Form onSubmit={handleFormSubmit}>
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
            />
        </Form>
    )
}

