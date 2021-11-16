import React from 'react';
import { Container } from "react-bootstrap";
import "react-day-picker/lib/style.css";
import NewLesson from '../components/Schedule/NewLesson';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelopeSquare } from '@fortawesome/free-solid-svg-icons'

export default function Schedule() {

    const icon = <FontAwesomeIcon icon={faEnvelopeSquare} />
    return (
        <Container>
            <h3 className='mb-3 text-center'>Welcome to Schedule Management!</h3>
            <NewLesson/>
            <Link to={'/notifications'}>
                <Button variant="primary" size="lg">
                    {icon} manage notifications
                </Button>
            </Link>
        </Container>
    )
}

