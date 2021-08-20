import { Link } from 'react-router-dom';
import { Nav } from 'react-bootstrap';
import '../App.css';

export default function PortalNav() {

    return (
        <Nav variant="tabs" defaultActiveKey="/portal">
  <Nav.Item>
    <Nav.Link as={Link} to='/portal'>Portal</Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link as={Link} to='/students'>Manage Students</Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link as={Link} to='/schedule'>Manage Schedule</Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link as={Link} to='/calendar'>Calendar</Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link as={Link} to='/comments'>Lesson Comments</Nav.Link>
  </Nav.Item>
</Nav>
    )
};

