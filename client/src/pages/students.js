import React from 'react';
import { Container } from "react-bootstrap";
import "react-day-picker/lib/style.css";
import AddStudent from '../components/Students/AddStudent';
import PortalNav from '../components/PortalNav';
import Auth from '../utils/auth'

export default function Students() {

    const loggedStatus = Auth.loggedIn();
    const isTeacher = Auth.getProfile().data.isTeacher;
    return (
        <Container>  
            {loggedStatus && isTeacher ? (
                <AddStudent />
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




