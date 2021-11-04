import React, { useEffect, useRef } from 'react';
import { useQuery } from "@apollo/client";
import { GET_STUDENT } from '../../utils/queries';
import { Card, Toast } from "react-bootstrap";

// TODO: Query to find get Student's messages to teacher
// Students will only be able to send messages to the teacher, so really we'll be querying our own messages and filtering by messageAuthor

export default function MessageHistory({ studentId, setStudentId }) {
  const messagesEndRef = useRef(null);
  const scrollToBottom = () => {
    messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
  };
  
  const { data } = useQuery(GET_STUDENT, {
    variables: { _id: studentId },
  });
  const student = data?.user.messages || [];
  useEffect(scrollToBottom, [student.length]);

    return (
        <Card>
            <Card.Header className='text-center'>{data?.user.username}</Card.Header>
            <Card.Body
            style={{ 
              maxHeight: '200px',
              overflowY: 'auto'
           }}
            >
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
                <div ref={messagesEndRef} />
            </Card.Body>
        </Card>
    )
}