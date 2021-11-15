import React, { useState, useContext } from 'react';
import useConfirm from "../../hooks/useConfirm";
import { useMutation } from '@apollo/client';
import { DELETE_EVENT } from '../../utils/mutations';
import { Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'

export default function DeleteButton({ _id }) {
    const {confirm} = useConfirm();
    const [deleteEvent] = useMutation(DELETE_EVENT)
    const showConfirm = async () => {
        const isConfirmed = await confirm('Delete Lesson?');
        if (isConfirmed) {
            await deleteEvent({ variables: { _id: _id } });      
        } 
    }
    return (
        <>
        <Button onClick={showConfirm}>
            <FontAwesomeIcon icon={faTrashAlt} />
        </Button>
        </>
    );
}