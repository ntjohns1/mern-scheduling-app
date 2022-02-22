import React from 'react';
import { Toast } from 'react-bootstrap';
import Auth from '../../../utils/auth';

export default function StudentTag({ students }) {
     function goToSingleStudent(studentId) {
        if (Auth.loggedIn()) {
          document.location.replace(`/${studentId}`);
        }
      }

    return (
   
                <Toast onClick={() => goToSingleStudent(students._id)}>
                    <Toast.Header closeButton={false}>
                        <strong className="me-auto">{students.username}</strong>
                    </Toast.Header>
                </Toast>
     
    )
}