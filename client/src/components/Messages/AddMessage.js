import React, { useState } from 'react';
import { useMutation, useQuery } from "@apollo/client";
import { ADD_MESSAGE } from '../../utils/mutations';
import { Form, Button, Toast } from "react-bootstrap";
import { GET_STUDENT } from '../../utils/queries';

export default function AddMessage({ studentId, setStudentId }) {
    const [addMessage, { data, loading, error }] = useMutation(ADD_MESSAGE, {
        refetchQueries: [
          GET_STUDENT, // DocumentNode object parsed with gql
          'user' // Query name
        ],
      });
    const [messageText, setMessageText] = useState('');
    console.log(studentId);
    const handleFormSubmit = async (event) => {
        event.preventDefault();
        try {
            await addMessage({
                variables: {
                    _id: studentId,
                    messageText: messageText
                },
            });
            alert('You Did It!')
        } catch (e) {
            console.error(e);
            alert('select a user')
        }
        setMessageText('');
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

