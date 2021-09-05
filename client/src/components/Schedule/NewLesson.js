import React, { useState } from 'react';
import { useQuery } from "@apollo/client";
import { GET_STUDENTS } from '../../utils/queries';
import { Card, Container, Form, Button } from "react-bootstrap";
import PortalNav from "../components/PortalNav";
import { DateUtils } from 'react-day-picker';
import DayPickerInput from "react-day-picker/DayPickerInput";
import "react-day-picker/lib/style.css";
import dateFnsFormat from 'date-fns/format';
import dateFnsParse from 'date-fns/parse';

function parseDate(str, format, locale) {
    const parsed = dateFnsParse(str, format, new Date(), { locale });
    if (DateUtils.isDate(parsed)) {
        return parsed;
    }
    return undefined;
}

function formatDate(date, format, locale) {
    return dateFnsFormat(date, format, { locale });
}

export default function Schedule() {
    const { data } = useQuery(GET_STUDENTS);
    const students = data?.users || [];
    const FORMAT = 'MM/dd/yyyy';
    const [studentId, setStudentId] = useState('');
    const [date, setDate] = useState(new Date());
    const [time, setTime] = useState('')
    const times = [
        {
            label: '10:00am',
            value: '10',
        },
        {
            label: '11:00am',
            value: '11',
        },
        {
            label: '12:00am',
            value: '12',
        },
        {
            label: '1:00pm',
            value: '13',
        },
        {
            label: '2:00pm',
            value: '14',
        },
        {
            label: '3:00pm',
            value: '15',
        },
        {
            label: '4:00pm',
            value: '16',
        },
        {
            label: '5:00pm',
            value: '17',
        },
        {
            label: '6:00pm',
            value: '18',
        },
    ];

    function onChange(date) {
        setDate(date);
    }

    return (
        <Container>
            <PortalNav />
            <h3 className='mb-3 text-center'>Welcome to Schedule Management!</h3>
            <Card>
                <Card.Header>
                    <h3>Schedule a Lesson</h3>
                </Card.Header>
                <Card.Body>
                    <Form>
                        <Form.Group className='mb-3'>
                            <Form.Label for="student-scheduleLesson" className='mb-2'>Select A Student: </Form.Label><br />
                            <Form.Control
                                as="select"
                                name='selectStudent'
                                value={studentId}
                                onChange={(e) => setStudentId(e.target.value)}
                            >
                                <option value=''> Select a Student </option>
                                {students.map((option) => (
                                    <option value={option._id} key={option._id}>{option.username}</option>
                                ))}
                            </Form.Control>
                        </Form.Group>
                        <Form.Group className='mb-3'>
                            <Form.Label for="date-scheduleLesson">Select Date: </Form.Label><br />
                            <DayPickerInput
                                value={date}
                                onChange={onChange}
                                formatDate={formatDate}
                                format={FORMAT}
                                parseDate={parseDate}
                                placeholder={`${dateFnsFormat(new Date(), FORMAT)}`} />
                        </Form.Group>
                        <Form.Group className='mb-3'>
                            <Form.Label for="time-scheduleLesson" className='mb-2'>Select A Time: </Form.Label>
                            <Form.Control
                                as="select"
                                name='selectTime'
                                value={times.value}
                                onChange={(e) => setDate(e.target.value)}

                            >
                                {times.map((option) => (
                                    <option value={option.value} key={option.value}>{option.label}</option>
                                ))}
                            </Form.Control>
                        </Form.Group>
                        <Button
                            as='input'
                            className='my-2'
                            type='submit'
                        // value='addLesson' 
                        />
                    </Form>
                </Card.Body>
            </Card>
        </Container>
    )
}

/*
    {{#each students as |user|}}
    <option>'ID, Firstname Last Name'</option>
    /* {{/each}} */
