import React, { useState } from 'react';
import { useQuery } from "@apollo/client";
import { GET_STUDENT } from '../../utils/queries';
import { Card, Toast, ToastContainer } from "react-bootstrap";

export default function MessageHistory({ studentId, setStudentId }) {
    const { loading, data } = useQuery(GET_STUDENT, {
        variables: { _id: studentId },
    });
    const student = data?.user.messages || [];

    return (
        <Card>
            <Card.Header className='text-center'>{data?.user.username}</Card.Header>
            <Card.Body>
                {student.map((message) => (
                         <Toast key={message._id} className='my-3'>
                           <Toast.Header closeButton={false}>
                             <img
                               className="rounded me-2"
                               alt=""
                             />
                             <strong className="me-auto">{message.messageAuthor}</strong>
                             <small>{message.createdAt}</small>
                           </Toast.Header>
                           <Toast.Body>{message.messageText}</Toast.Body>
                         </Toast>
                ))}
            </Card.Body>
        </Card>
    )
}