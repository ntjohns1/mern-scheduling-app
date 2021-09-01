import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { Button } from 'react-bootstrap';

export default function DeletUserBtn({ formState }) {
    // const [displayError, setDisplayError] = useState(null);

    // const [updateUser, { error }] = useMutation(UPDATE_USER);

    // console.log({ ...formState });


    // const handleUpdate = async (e) => {
    //     e.preventDefault();
    //     setDisplayError(null);

    //     // destructure state
    //     const {
    //         _id,
    //         username,
    //         email,
    //     } = formState;
    //     try {
    //         await updateUser({
    //             variables: {
    //                 _id: _id,
    //                 username: username,
    //                 email: email
    //             }
    //         });
    //         alert("You Did It!");
    //     }
    //     catch (err) {
    //         return setDisplayError(`${err}`);
    //     }
    // };
    return (
    <Button
    className='btn-danger'
    // onClick={handleDelete} 
    >
    Delete    
    </Button>
   )
}