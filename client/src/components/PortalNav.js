import { Link } from 'react-router-dom';
import { Nav } from 'react-bootstrap';
import '../App.css';

export default function PortalNav() {

  return (
    <Nav variant="tabs" defaultActiveKey="/portal" className="my-3 justify-content-center">
      <Nav.Item>
        <Nav.Link as={Link} to='/portal' eventKey='portal'>Portal</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link as={Link} to='/students' eventKey='students'>Manage Students</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link as={Link} to='/schedule' eventKey='schedule'>Manage Schedule</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link as={Link} to='/calendar' eventKey='calendar'>Calendar</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link as={Link} to='/comments' eventKey='comments'>Lesson Comments</Nav.Link>
      </Nav.Item>
    </Nav>
  )
};

