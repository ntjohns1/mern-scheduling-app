import React, { useEffect, useState } from 'react';
import { useQuery, useMutation } from '@apollo/client';
import { EVENTS_BY_DATE } from '../../utils/queries';
import { SEND_EMAIL } from '../../utils/mutations';
import { Container } from 'react-bootstrap';
// import { DateUtils } from 'react-day-picker';
// import DayPickerInput from "react-day-picker/DayPickerInput";
import "react-day-picker/lib/style.css";
// import dateFnsFormat from 'date-fns/format';
// import dateFnsParse from 'date-fns/parse';
// import ViewSchedule from './ViewSchedule';
const { format } = require('date-fns');


export default function SetNotifications() {
    // Poll eventsByDay once per day to get matching events
    const now = Date.now()
    const today = format(now, 'P');
    const { data } = useQuery(EVENTS_BY_DATE, {
        variables: { dayRef: today },
        pollInterval: 86400000,
    });
    const lesson = data?.eventsByDate
    // for all returned users, send a reminder email.
    // const [sendEmail] = useMutation(SEND_EMAIL);

    console.log(lesson);

    // Set up Boolean property on user called autoNotify
    // now only send emails to autoNotify: true users 
    // if (user.autoNotify === true) {
    // sendEmail mutation for each returned user
    // }

    return (
        <Container>
            <ul>
                {lesson && lesson.map((lesson) => (
                    <li>{lesson.studentName}</li>
                ))}
            </ul>
        </Container>
    )
}
