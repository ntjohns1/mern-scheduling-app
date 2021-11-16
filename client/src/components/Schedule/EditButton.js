import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit } from '@fortawesome/free-solid-svg-icons'


export default function EditButton({ _id }) {
    return (
        <Link to={`/lesson/${_id}`}>
        <Button>
        <FontAwesomeIcon icon={faEdit} />
        </Button>
        </Link>
    )
}