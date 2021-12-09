import React from 'react';
import { Toast } from 'react-bootstrap';

export default function StudentTag({ students }) {
    console.log(students);
    return (
   
                <Toast>
                    <Toast.Header closeButton={false}>
                        <strong className="me-auto">{students.username}</strong>
                        {/* <small>11 mins ago</small> */}
                    </Toast.Header>
                    {/* <Toast.Body>Hello, world! This is a toast message.</Toast.Body> */}
                </Toast>
     
    )
}