import React from 'react';
import { useMutation } from '@apollo/client';
import { UPDATE_USER } from '../utils/mutations';

export default function UpdateUserBtn({ formState }) {
    console.log(formState);
    const [update] = useMutation(UPDATE_USER);
    const {
        username,
        email
    } = formState;

    const buildInput = {
        username: username,
        email: email
      };
    const handleUpdate = async (e) => {
        try {
            await update({
                variables: {
                    ...buildInput
                }
            });
            console.log('yeppers!')
        }
        catch (err) {
            return console.err;
        }

    }
   return (
    <button
    className='btn-info'
    onClick={handleUpdate} 
    >
    Update    
    </button>
   )
}