import React, { useState } from 'react';
import { Card, Container, Form, Button } from 'react-bootstrap';
import PortalNav from '../components/PortalNav';
import StudentTable from '../components/StudentTable';
import { useMutation } from '@apollo/client';
import { ADD_USER } from '../utils/mutations';
import Auth from '../utils/auth';

export default function Students() {
    // form input to add student
    const [formState, setFormState] = useState({
        username: '',
        email: '',
        password: 'password1234',
    });
    const addUser = useMutation(ADD_USER);

    // update state based on form input changes
    const handleChange = (event) => {
        const { name, value } = event.target;

        setFormState({
            ...formState,
            [name]: value,
        });
    };

    // submit form
    const handleFormSubmit = async (event) => {
        event.preventDefault();
        console.log(formState);

        try {
            const { data } = await addUser({
                variables: { ...formState },
            });

            Auth.login(data.addUser.token);
        } catch (e) {
            console.error(e);
        }
        setFormState({
            username: '',
            email: '',
            password: 'password1234',
        });

    };
    return (
        <Container className='p-4 my-4'>
            <PortalNav />
            <StudentTable />
            <Card>
                <Card.Header>
                    <h4>Add New Student</h4>
                </Card.Header>
                <Card.Body className="p-3">
                    <p>Please note that when creating a student, their password is randomly generated. The password, which you
                        will need to write down and share with your student, will appear in a pop up window.</p>
                    <p>The student will need the email address and the generated password to log in.</p>
                    <Form onSubmit={handleFormSubmit} className="mb-3 px-3">
                        <Form.Group className="mb-3 px-3" controlId="username">
                            <Form.Label>Student Username</Form.Label>
                            <Form.Control
                                type="text"
                                name="username"
                                value={formState.username}
                                onChange={handleChange}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3 px-3" controlId="email">
                            <Form.Label>Student Email</Form.Label>
                            <Form.Control
                                type="email"
                                name="email"
                                value={formState.email}
                                onChange={handleChange}

                            />
                        </Form.Group>
                        <Form.Group className="mb-3 px-3" controlId="studentFirstName">
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                                type="text"
                                name="password"
                                value={formState.password}
                                onChange={handleChange}
                            />
                        </Form.Group>
                        <Button
                            className="mx-3"
                            variant="success"
                            type="submit"
                            style={{ cursor: 'pointer' }}
                        >
                            Add Student
                        </Button>
                    </Form>
                </Card.Body>
            </Card>
        </Container>
    )
};