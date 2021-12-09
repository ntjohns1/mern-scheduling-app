import React from 'react';
import { Nav } from 'react-bootstrap';

export default function SchedulelNav({ currentPage, handlePageChange }) {
  // const [key, setKey] = useState('portal');
  return (
    <Nav
      variant="tabs"
      className="my-3 justify-content-center"
    >
      <a
        href="#upcoming"
        onClick={() => handlePageChange('Upcoming')}
        // Check to see if the currentPage is `Contact`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
        className={currentPage === 'Upcoming' ? 'nav-link active' : 'nav-link'}
      >
        Upcoming
      </a>
      <a
        href="#calendar"
        onClick={() => handlePageChange('Calendar')}
        // Check to see if the currentPage is `Contact`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
        className={currentPage === 'Calendar' ? 'nav-link active' : 'nav-link'}
      >
        Calendar
      </a>
    </Nav>
  )
};



