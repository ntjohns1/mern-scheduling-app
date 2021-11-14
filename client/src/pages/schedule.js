import React from 'react';
import { Container } from "react-bootstrap";
import "react-day-picker/lib/style.css";
import NewLesson from '../components/Schedule/NewLesson';
const times = [
    {
        label: '10:00am',
        value: '10:00:00',
    },
    {
        label: '10:15am',
        value: '10:15:00',
    },
    {
        label: '10:30am',
        value: '10:30:00',
    },
    {
        label: '10:45am',
        value: '10:45:00',
    },
    {
        label: '11:00am',
        value: '11:00:00',
    },
    {
        label: '11:15am',
        value: '11:15:00',
    },
    {
        label: '11:30am',
        value: '11:30:00',
    },
    {
        label: '11:45am',
        value: '11:45:00',
    },
    {
        label: '12:00pm',
        value: '12:00:00',
    },
    {
        label: '12:15pm',
        value: '12:15:00',
    },
    {
        label: '12:30pm',
        value: '12:30:00',
    },
    {
        label: '12:45pm',
        value: '12:45:00',
    },
    {
        label: '1:00pm',
        value: '13:00:00',
    },
    {
        label: '1:15pm',
        value: '13:15:00',
    },
    {
        label: '1:30pm',
        value: '13:30:00',
    },
    {
        label: '1:45pm',
        value: '13:45:00',
    },
    {
        label: '2:00pm',
        value: '14:00:00',
    },
    {
        label: '2:15pm',
        value: '14:15:00',
    },
    {
        label: '2:30pm',
        value: '14:30:00',
    },
    {
        label: '2:45pm',
        value: '14:45:00',
    },    
    {
        label: '3:00pm',
        value: '15:00:00',
    },
    {
        label: '3:15pm',
        value: '15:15:00',
    },
    {
        label: '3:30pm',
        value: '15:30:00',
    },
    {
        label: '3:45pm',
        value: '15:45:00',
    },         
    {
        label: '4:00pm',
        value: '16:00:00',
    },
    {
        label: '4:15pm',
        value: '16:15:00',
    },
    {
        label: '4:30pm',
        value: '16:30:00',
    },
    {
        label: '4:45pm',
        value: '16:45:00',
    },  
    {  
        label: '5:00pm',
        value: '17:00:00',
    },
    {
        label: '5:15pm',
        value: '17:15:00',
    },
    {
        label: '5:30pm',
        value: '17:30:00',
    },
    {
        label: '5:45pm',
        value: '17:45:00',
    },    
    {
        label: '6:00pm',
        value: '18:00:00',
    },
    {
        label: '6:15pm',
        value: '18:15:00',
    },
    {
        label: '6:30pm',
        value: '18:30:00',
    },
    {
        label: '6:45pm',
        value: '18:45:00',
    },    
];



export default function Schedule() {

      
    return (
        <Container>
            <h3 className='mb-3 text-center'>Welcome to Schedule Management!</h3>
            <NewLesson times={times}/>
        </Container>
    )
}

/*
    {{#each students as |user|}}
    <option>'ID, Firstname Last Name'</option>
    /* {{/each}} */
