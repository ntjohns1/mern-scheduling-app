import React, { useState, useEffect } from 'react';
import { useQuery, useMutation } from "@apollo/client";
import { useSelector } from 'react-redux';
import { EVENTS_BY_DATE, GET_STUDENTS } from '../../utils/queries';
import { ADD_EVENT_AND_EMAIL } from '../../utils/mutations';
import times from '../../utils/helpers/times';
import { Card, Container, Form, Button } from "react-bootstrap";
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelopeSquare } from '@fortawesome/free-solid-svg-icons'
import { DateUtils } from 'react-day-picker';
import DayPickerInput from "react-day-picker/DayPickerInput";
import "react-day-picker/lib/style.css";
import dateFnsFormat from 'date-fns/format';
import dateFnsParse from 'date-fns/parse';
import ViewSchedule from './ViewSchedule';
import SelectStudent from '../SelectStudent';
import { format, parse } from 'date-fns'
const mongoose = require('mongoose');

function parseDate(str, format) {
    const parsed = dateFnsParse(str, format, new Date());
    if (DateUtils.isDate(parsed)) {
        return parsed;
    }
    return undefined;
}

function formatDate(date, format) {
    return dateFnsFormat(date, format);
}

export default function NewLesson() {
    const icon = <FontAwesomeIcon icon={faEnvelopeSquare} />
    const students = useSelector((state) => Object.values(state.user));


    // const { data } = useQuery(GET_STUDENTS);
    const [addEvent] = useMutation(ADD_EVENT_AND_EMAIL, {
        refetchQueries: [
            EVENTS_BY_DATE, // DocumentNode object parsed with gql
            'eventsByDate' // Query name
        ],
    });
    // const students = data?.users || [];
    const [studentId, setStudentId] = useState('');
    const [studentName, setStudentName] = useState('');
    const [studentEmail, setStudentEmail] = useState('');
    const [time, setTime] = useState({ value: '' });
    const [schedule, setSchedule] = useState('');
    const [selectedDay, setSelectedDay] = useState(undefined)
    const [description, setDescription] = useState('');
    const FORMAT = 'MM/dd/yyyy';

    const dayChange = (day, modifiers, dayPickerInput) => {
        format(day, 'MM.dd.yyyy');
        setSelectedDay(day)
        const input = dayPickerInput.getInput();
        setSchedule(input.value);
    }

    const handleChange = async (e) => {
        setStudentId(e.target.value)
    };

    const getNames = (e) => {
        for (let i = 0; i < students.length; i++) {
            if (students[i]._id === studentId) {
                setStudentName(students[i].username);
                setStudentEmail(students[i].email);
            }
        }
    }

    useEffect(() => {
        getNames();
    });

    const handleForm = async (e) => {
        e.preventDefault();
        // check for for errors`

        // make sure values are filled in and valid

        let email = studentEmail;

        let timeStamp = parse(schedule, 'MM/dd/yyyy', new Date());

        let studentId = mongoose.Types.ObjectId(studentId);

        const eventInput = {
            studentId: studentId,
            studentName: studentName,
            date: timeStamp,
            dayRef: schedule,
            time: time,
            description: description,
        };

        const sendEmailInput = {
            email: 'nelsontjohns@gmail.com',
            senderName: 'Nelson',
            toEmail: email,
            subject: `New lesson on ${schedule}`,
            text: `This is an autmated reminder that you have a new lesson scheduled with Nelson Johns on ${schedule} at ${time}`
        }

        // if the input is valid, send it to server
        try {
            await addEvent({ variables: { AddEventInput: eventInput, SendEmailInput: sendEmailInput } });
            alert('lesson added');
        } catch (err) {
            console.log(err);
        }
        setStudentId('');
        setStudentName('');
        setStudentEmail('');
        setDescription('');
    };

    return (

        <Container>
            <h3 className='mb-3 text-center'>Welcome to Schedule Management!</h3>

            <Card>
                <Card.Header>
                    <h3>Schedule a Lesson</h3>
                </Card.Header>
                <Card.Body>
                    <Form onSubmit={handleForm}>
                        {/* <Form.Group className='mb-3'>
                            <Form.Label className='mb-2'>Select A Student: </Form.Label><br />
                            <Form.Control
                                as="select"
                                name='selectStudent'
                                value={studentId}
                                onChange={handleChange}
                            >
                                <option value=''> Select a Student </option>
                                {students && students.map((option) => (
                                    <option value={option._id} key={option._id}>{option.username}</option>
                                ))}
                            </Form.Control>
                        </Form.Group> */}
                        <SelectStudent _id={students._id}/>
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
                            <Form.Label className='mb-2'>Select A Time: </Form.Label>
                            <Form.Control
                                as="select"
                                name='selectTime'
                                value={times.value}
                                onChange={(e) => setTime(e.target.value)}

                            >
                                <option value=''> Select a Time </option>
                                {times.map((option) => (
                                    <option value={option.value} key={option.value}>{option.label}</option>
                                ))}
                            </Form.Control>
                        </Form.Group>
                        <Form.Group>
                            <Form.Control
                                as="textarea"
                                name="description"
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                                style={{ height: '100px' }}
                            />
                        </Form.Group>
                        <Button
                            as='input'
                            className='my-2'
                            type='submit'
                        />
                    </Form>
                </Card.Body>
            </Card>
            <ViewSchedule day={schedule} />
            <Link to={'/notifications'}>
                <Button variant="primary" size="lg">
                    {icon} manage notifications
                </Button>
            </Link>
        </Container>
    )
}

