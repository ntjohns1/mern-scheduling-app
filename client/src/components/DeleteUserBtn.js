import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { Button } from 'react-bootstrap';
import { DELETE_USER } from '../utils/mutations';

export default function DeletUserBtn({ formState }) {
    const [displayError, setDisplayError] = useState(null);
    const [deleteUser, { error }] = useMutation(DELETE_USER);
    const handleDelete = async (e) => {
        e.preventDefault();
        setDisplayError(null);
        // destructure state
        const { _id } = formState;
        try {
            await deleteUser({ variables: { _id: _id } });
            window.location.reload();
            alert("You Did It!");
        }
        catch (err) {
            return setDisplayError(`${err}`);
        }
    };
    return (
        <Button
            className='btn-danger'
            onClick={handleDelete}
        >
            Delete
        </Button>
    )
}