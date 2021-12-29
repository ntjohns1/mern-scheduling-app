import React, { useState } from 'react';
import { Card, Container } from "react-bootstrap";
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

export default function CalEl() {
    const [value, onChange] = useState(new Date());
    return (
        <Container >
            <Card>
                <Card.Header>
                    Calendar
                </Card.Header>
                <Card.Body>
                <Calendar
                    onChange={onChange}
                    value={value}
                />
                </Card.Body>
            </Card>
        </Container>
    )
};