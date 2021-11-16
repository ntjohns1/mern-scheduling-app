import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit } from '@fortawesome/free-solid-svg-icons'


export default function EditButton({ id }) {
    return (
        <Link to={`/lesson/${id}`}>
        <Button>
        <FontAwesomeIcon icon={faEdit} />
        </Button>
        </Link>
    )
}