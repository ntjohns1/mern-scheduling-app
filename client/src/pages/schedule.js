import React from 'react';
import { Container } from "react-bootstrap";
import "react-day-picker/lib/style.css";
import NewLesson from '../components/Schedule/NewLesson';
import PortalNav from '../components/PortalNav';
import Auth from '../utils/auth'

export default function Schedule() {
    const loggedStatus = Auth.loggedIn();
    const isTeacher = Auth.getProfile().data.isTeacher;
    return (
        <Container>
            <PortalNav />
            {loggedStatus && isTeacher ? (
                <NewLesson />
            ) : (
                <>
                    <h2>
                        You must be logged in as a teacher to access this page.
                    </h2>
                </>
            )}
        </Container>
    );
};




