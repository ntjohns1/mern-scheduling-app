import React, { useState } from 'react';
import { Container } from "react-bootstrap";
import PortalNav from "../components/PortalNav";
import 'react-calendar/dist/Calendar.css';
import CalEl from '../components/Schedule/Calendar';
import Auth from '../utils/auth'


export default function Cal() {
    const [value, onChange] = useState(new Date());
    const loggedStatus = Auth.loggedIn();
    const isTeacher = Auth.getProfile().data.isTeacher;
    return (
        <Container className='text-center'>
            <PortalNav />
            {loggedStatus && isTeacher ? (
                <CalEl />
            ) : (
                <>
                    <h2>
                        You must be logged in as a teacher to access this page.
                    </h2>
                </>
            )}
        </Container>)
};