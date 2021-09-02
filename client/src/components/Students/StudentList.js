import React, { useState } from 'react';
import { Form, Row, Col, InputGroup } from 'react-bootstrap';
import UpdateUserBtn from './UpdateUserBtn';
import DeleteUserBtn from './DeleteUserBtn';

export default function UpdateUser({ students }) {
    const [formState, setFormState] = useState({
        _id: students._id,
        username: students.username,
        email: students.email
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormState({
            ...formState,
            [name]: value,
        });
    };

    return (
            <InputGroup>
                <Row className='my-2'>
                    <Col xs={4}>
                        <Form.Control
                            value={formState.username}
                            name="username"
                            onChange={handleChange}
                            type="text"
                            placeholder="username"
                        />
                    </Col>
                    <Col xs={4}>
                    <Form.Control
                        value={formState.email}
                        name="email"
                        onChange={handleChange}
                        type="email"
                        placeholder="email"
                    />
                    </Col>
                    <Col xs={2}>
                    <UpdateUserBtn formState={formState} />
                    </Col>
                    <Col xs={2}>
                    <DeleteUserBtn formState={formState} />
                    </Col>
                </Row>
            </InputGroup>
    )
}
