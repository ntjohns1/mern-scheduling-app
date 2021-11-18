import React, { useState } from 'react';
import { Container } from "react-bootstrap";
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

export default function CalEl() {
    const [value, onChange] = useState(new Date());
    return (
        <Container className='text-center'>
            <h2 className='mt-4'>Calendar</h2>
                <Calendar
                    onChange={onChange}
                    value={value}
                />
        </Container>
    )
};