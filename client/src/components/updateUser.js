import React, { useState } from 'react';
import { Form, Row, Col, Button } from 'react-bootstrap';
import { useMutation } from '@apollo/client';
import { UPDATE_USER } from '../utils/mutations';

export default function UpdateUser({ students }) {
    const [displayError, setDisplayError] = useState(null);
    const [formState, setFormState] = useState({
        _id: students._id,
        username: students.username,
        email: students.email
    });

    const [updateUser, { error }] = useMutation(UPDATE_USER);

    console.log({ ...formState });


    const handleUpdate = async (e) => {
        e.preventDefault();
        setDisplayError(null);

        // destructure state
        const {
            _id,
            username,
            email,
        } = formState;
        try {
            await updateUser({
                variables: {
                    _id: _id,
                    username: username,
                    email: email
                }
            });
        }
        catch (err) {
            return setDisplayError(`${err}`);
        }
    };

    const handleChange = (event) => {
        const { name, value } = event.target;

        setFormState({
            ...formState,
            [name]: value,
        });
    };

    return (
        <div>
            <form className="form">
                <input
                    value={formState.username}
                    name="username"
                    onChange={handleChange}
                    type="text"
                    placeholder="username"
                />
                <input
                    value={formState.email}
                    name="email"
                    onChange={handleChange}
                    type="email"
                    placeholder="email"
                />
                <button type="button" onClick={handleUpdate}>Submit</button>
            </form>
        </div>
    )
}
