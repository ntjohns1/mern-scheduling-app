import React from 'react';
import { Link } from 'react-router-dom';
import { Nav } from 'react-bootstrap';
import '../App.css';

export default function PortalNav() {
  // const [key, setKey] = useState('portal');
  return (
    <Nav
      variant="tabs"
      className="my-3 justify-content-center"
    >
        <Nav.Link as={Link} to='/portal' eventKey='portal'>Portal</Nav.Link>
        <Nav.Link as={Link} to='/students' eventKey='students'>Manage Students</Nav.Link>
        <Nav.Link as={Link} to='/schedule' eventKey='schedule'>Manage Schedule</Nav.Link>
        <Nav.Link as={Link} to='/calendar' eventKey='calendar'>Calendar</Nav.Link>
        <Nav.Link as={Link} to='/messages' eventKey='messages'>Messages</Nav.Link>
    </Nav>
  )
};

