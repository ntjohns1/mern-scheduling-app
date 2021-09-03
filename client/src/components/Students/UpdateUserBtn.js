import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { Button } from 'react-bootstrap';

import { UPDATE_USER } from '../../utils/mutations';

export default function UpdateUserBtn({ formState }) {
    const [displayError, setDisplayError] = useState(null);
    const [updateUser] = useMutation(UPDATE_USER);
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
            alert("You Did It!");
        }
        catch (err) {
            window.location.reload();
            return setDisplayError(`${err}`);
        }
    };
    return (
        <Button
            className='btn-info'
            onClick={handleUpdate}
        >
            Update
        </Button>
    )
}