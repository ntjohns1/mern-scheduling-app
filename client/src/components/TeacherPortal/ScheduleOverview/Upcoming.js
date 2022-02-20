import React, { useEffect, useState } from 'react';
import { useQuery } from '@apollo/client';
import { EVENTS_BY_DATE } from '../../../utils/queries';
import { Container, Card, Row, Col } from 'react-bootstrap';
import { DateUtils } from 'react-day-picker';
import DayPickerInput from "react-day-picker/DayPickerInput";
import "react-day-picker/lib/style.css";
import dateFnsFormat from 'date-fns/format';
import dateFnsParse from 'date-fns/parse';
import { format, parse } from 'date-fns';
import SingleDay from '../../Schedule/SingleDay';


/*******************************************************************

* Bring in data from FindByDate query

* Give individual toasts identifier corresponding to time of day
* If time of day from data object matches, render student name in 
  second column of toast

*******************************************************************/

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
                    <SingleDay dayRef={today}/>
                    </Col>
                    <Col xs={4}>
                    <SingleDay dayRef={tomorrow}/>
                    </Col>
                    <Col xs={4}>
                    <SingleDay dayRef={dayAfterTomorrow}/>
                    </Col>
                </Row>
            </div>
        </>
    )
};