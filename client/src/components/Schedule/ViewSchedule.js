import React, { useEffect, useState } from 'react';
import { useQuery } from '@apollo/client';
import { EVENTS_BY_DATE } from '../../utils/queries';
import { ListGroup, Container, Button } from 'react-bootstrap';

export default function ViewSchedule({ day }) {
  console.log(day);

  const [dayRef, setDayRef] = useState('');
  
  useEffect(() => {
    setDayRef(day);
  }, [day]);

  const { data } = useQuery(EVENTS_BY_DATE, {
    variables: { dayRef: dayRef },
  });
  const lesson = data?.eventsByDate || [];

  if (!day) {
    return <h3>Select a Day Above</h3>;
  }
  return (
    <Container>

      <Container className='row'>
        <h3>Scheudle</h3>
        <ListGroup id="homeHeader" style={{ marginBottom: '.2em', minHeight: '2.5em' }} horizontal>
          <ListGroup.Item className='col-2' style={{ backgroundColor: '#B0B0B0', fontWeight: 'bold' }}>Time</ListGroup.Item>
          <ListGroup.Item className='col-4' style={{ backgroundColor: '#B0B0B0', fontWeight: 'bold' }}>Student</ListGroup.Item>
          <ListGroup.Item className='col-2' style={{ backgroundColor: '#B0B0B0', fontWeight: 'bold' }}>Notes</ListGroup.Item>
          <ListGroup.Item className='col-2' style={{ backgroundColor: '#B0B0B0', fontWeight: 'bold' }}>Edit</ListGroup.Item>
          <ListGroup.Item className='col-2' style={{ backgroundColor: '#B0B0B0', fontWeight: 'bold' }}>Message</ListGroup.Item>
        </ListGroup>
        {lesson && lesson.map((lesson) => (
          <ListGroup id="homeItems" key={lesson._id} horizontal>
            <ListGroup.Item className='col-2' style={{ backgroundColor: '#B0B0B0', textDecoration: 'underline', cursor: 'pointer' }} id={lesson.studentId}>{lesson.time}</ListGroup.Item>
            <ListGroup.Item className='col-4' style={{ backgroundColor: '#B0B0B0' }} id={lesson._id}>{lesson.studentName}</ListGroup.Item>
            <ListGroup.Item className='col-2' style={{ backgroundColor: '#B0B0B0' }} id={lesson.studentId}>{lesson.description}</ListGroup.Item>
            <ListGroup.Item className='col-2' style={{ backgroundColor: '#B0B0B0' }} id={lesson.studentId}><Button>Edit</Button></ListGroup.Item>
            <ListGroup.Item className='col-2' style={{ backgroundColor: '#B0B0B0' }} id={lesson.studentId}><Button>Message</Button></ListGroup.Item>
          </ListGroup>
        ))}
      </Container>
    </Container>
  )
};