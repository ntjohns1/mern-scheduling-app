import React, { useState } from 'react';
import { useQuery } from "@apollo/client";
import { GET_STUDENTS } from '../../utils/queries';
import { Card, Container, Form, Button } from "react-bootstrap";
import { DateUtils } from 'react-day-picker';
import DayPickerInput from "react-day-picker/DayPickerInput";
import "react-day-picker/lib/style.css";
import dateFnsFormat from 'date-fns/format';
import dateFnsParse from 'date-fns/parse';
const {format} = require('date-fns');


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

export default function NewLesson({ times }) {
    const { data } = useQuery(GET_STUDENTS);
    const students = data?.users || [];
    const [studentId, setStudentId] = useState('');
    const [time, setTime] = useState('')
    const [selectedDay, setSelectedDay] = useState(undefined)
    const FORMAT = 'MM/dd/yyyy';

    const dayChange = (day) => {
        format(day, 'MM.dd.yyyy');
        setSelectedDay(day)
    }

    console.log('selectedDay', selectedDay)


    console.log(time);
    console.log(studentId);
    return (

        <Container>
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
                            <Form.Label >Select Date: </Form.Label><br />
                            <DayPickerInput
                                onDayChange={dayChange}
                                hideOnDayClick={false}
                                placeholder="mm/dd/yyyy"
                                formatDate={formatDate}
                                format={FORMAT}
                                parseDate={parseDate}
                            />
                        
                            {/* {selectedDay ? (
                                <p>You clicked {selectedDay.toLocaleDateString()}</p>
                            ) : (
                                <p>Please select a day.</p>
                            )} */}
                        </Form.Group>
                        <Form.Group className='mb-3'>
                            <Form.Label for="time-scheduleLesson" className='mb-2'>Select A Time: </Form.Label>
                            <Form.Control
                                as="select"
                                name='selectTime'
                                value={times.value}
                                onChange={(e) => setTime(e.target.value)}

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
