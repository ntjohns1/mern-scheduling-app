import React from 'react';
import { Container } from "react-bootstrap";
import "react-day-picker/lib/style.css";
import NewLesson from '../components/Schedule/NewLesson';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelopeSquare } from '@fortawesome/free-solid-svg-icons'
import Auth from '../utils/auth'

export default function Schedule() {

    const loggedStatus = Auth.loggedIn();
    const isTeacher = Auth.getProfile().data.isTeacher;
    return (
        <Container>
            {loggedStatus && isTeacher ? (<NewLesson />) : (
                <>
                    <h2>
                        You must be logged in as a teacher to access this page.
                    </h2>
                </>
            )}
        </Container>
    )
}




