import React from 'react';
import { Row, Col } from 'react-bootstrap';
import "react-day-picker/lib/style.css";
import { format } from 'date-fns';
import SingleDay from '../../Schedule/SingleDay';

export default function Upcoming() {
    const minute = 1000 * 60;
    const hour = minute * 60;
    const day = hour * 24;
    const now = Date.now();
    const today = format(now, 'P');
    const tomorrow = format(now + day, 'P');
    const dayAfterTomorrow = format(now + day * 2, 'P')

    return (
        <>
            <div className='text-center'>
                <h3 className='mb-4'>Upcoming</h3>
                <Row>
                    <Col xs={4}>
                        <SingleDay dayRef={today} />
                    </Col>
                    <Col xs={4}>
                        <SingleDay dayRef={tomorrow} />
                    </Col>
                    <Col xs={4}>
                        <SingleDay dayRef={dayAfterTomorrow} />
                    </Col>
                </Row>
            </div>
        </>
    )
};