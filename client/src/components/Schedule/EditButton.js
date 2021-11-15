import React from 'react';
import { Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit } from '@fortawesome/free-solid-svg-icons'


export default function EditButton() {
    return (
        <Button>
        <FontAwesomeIcon icon={faEdit} />
        </Button>
    )
}