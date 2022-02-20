import React, { useState } from 'react';
import SchedulelNav from './ScheduleNav';
import { Card } from 'react-bootstrap';
import CalEl from '../../Schedule/Calendar';
import Upcoming from './Upcoming';

export default function ScheduleContainer() {
  const [currentPage, setCurrentPage] = useState('Home');

  // This method is checking to see what the value of `currentPage` is. Depending on the value of currentPage, we return the corresponding component to render.
  const renderPage = () => {
    if (currentPage === 'Calendar') {
      return <CalEl />;
    }
    if (currentPage === 'Upcoming') {
      return <Upcoming />;
    }
    else {
      return <Upcoming />
    }
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <Card className="shadow-lg">
      <Card.Header>
        <Card.Title className="text-center">Schedule Overview</Card.Title>
        <hr />
        <SchedulelNav currentPage={currentPage} handlePageChange={handlePageChange} />
        <hr />
      </Card.Header>
      <Card.Body className='d-flex justify-content-center'>
        <div>
          {renderPage()}
        </div>
      </Card.Body>
      <Card.Footer>
        <hr />
      </Card.Footer>
    </Card>
  );
}
