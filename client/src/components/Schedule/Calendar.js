import React, { useState } from 'react';
import { Container } from "react-bootstrap";
import PortalNav from "../components/PortalNav";
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

export default function Cal() {
    const [value, onChange] = useState(new Date());
    return (
        <Container className='text-center'>
            <PortalNav />
            <h2 className='mt-4'>Calendar</h2>
            <Container className='my-4 d-flex justify-content-center'>
                <Calendar
                    onChange={onChange}
                    value={value}
                />
            </Container>
        </Container>
    )
};