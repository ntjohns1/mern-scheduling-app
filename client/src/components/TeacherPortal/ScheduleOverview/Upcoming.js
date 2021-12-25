import React, { useEffect, useState } from 'react';
import { useQuery } from '@apollo/client';
import { EVENTS_BY_DATE } from '../../../utils/queries';
import { Container, Card } from 'react-bootstrap';
import { DateUtils } from 'react-day-picker';
import DayPickerInput from "react-day-picker/DayPickerInput";
import "react-day-picker/lib/style.css";
import dateFnsFormat from 'date-fns/format';
import dateFnsParse from 'date-fns/parse';
import { format, parse } from 'date-fns'

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

export default function Upcoming() {
    const minute = 1000 * 60;
    const hour = minute * 60;
    const day = hour * 24;
    const [dayRef, setDayRef] = useState();
    const [schedule, setSchedule] = useState('');
    const FORMAT = 'MM/dd/yyyy';

    const dayChange = (day, modifiers, dayPickerInput) => {
        format(day, 'MM.dd.yyyy');
        const input = dayPickerInput.getInput();
        setSchedule(input.value);
    }
    const now = Date.now()
    const today = format(now, 'P');
    if (dayRef === '') {
        setDayRef(today)
    }

    useEffect(() => {
        setDayRef(schedule);
    }, [schedule]);


    const { data } = useQuery(EVENTS_BY_DATE, {
        variables: { dayRef: dayRef },
    });
    const lesson = data?.eventsByDate || [];

    return (
        <Container>
            <h3>Scheudle</h3>
            <DayPickerInput
                onDayChange={dayChange}
                hideOnDayClick={true}
                placeholder="mm/dd/yyyy"
                formatDate={formatDate}
                format={FORMAT}
                parseDate={parseDate}
            />
            <Card>
                <Card.Title></Card.Title>
                <Card.Body>
                    <ul>
                        {lesson && lesson.map((lesson) => (
                            <li key={lesson._id}>{lesson.time}:  {lesson.studentName}</li>
                        ))}
                    </ul>
                </Card.Body>
            </Card>
        </Container>
    )
};