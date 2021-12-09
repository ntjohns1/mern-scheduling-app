// import React, { useState, useEffect } from 'react';
// import { useQuery, useMutation } from "@apollo/client";
// import { useSelector } from 'react-redux';
// import { EVENTS_BY_DATE, GET_STUDENTS } from '../../utils/queries';
// import { ADD_EVENT_AND_EMAIL } from '../../utils/mutations';
// import { Card, Row, Col } from "react-bootstrap";
// import { Link } from 'react-router-dom';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faEnvelopeSquare } from '@fortawesome/free-solid-svg-icons'
// import { DateUtils } from 'react-day-picker';
// import DayPickerInput from "react-day-picker/DayPickerInput";
// import CalEl from '../Schedule/Calendar';
// import "react-day-picker/lib/style.css";
// import dateFnsFormat from 'date-fns/format';
// import dateFnsParse from 'date-fns/parse';
// import { format, parse } from 'date-fns'
// import SchedulelNav from './ScheduleNav';
// const mongoose = require('mongoose');

// function parseDate(str, format) {
//     const parsed = dateFnsParse(str, format, new Date());
//     if (DateUtils.isDate(parsed)) {
//         return parsed;
//     }
//     return undefined;
// }

// function formatDate(date, format) {
//     return dateFnsFormat(date, format);
// }

// export default function ScheduleOverview({ currentPage, handlePageChange }) {
//     const icon = <FontAwesomeIcon icon={faEnvelopeSquare} />
//     const students = useSelector((state) => Object.values(state.user));


//     // const { data } = useQuery(GET_STUDENTS);
//     const [addEvent] = useMutation(ADD_EVENT_AND_EMAIL, {
//         refetchQueries: [
//             EVENTS_BY_DATE, // DocumentNode object parsed with gql
//             'eventsByDate' // Query name
//         ],
//     });
//     // const students = data?.users || [];
//     const [studentId, setStudentId] = useState('');
//     const [studentName, setStudentName] = useState('');
//     const [studentEmail, setStudentEmail] = useState('');
//     const [time, setTime] = useState({ value: '' });
//     const [schedule, setSchedule] = useState('');
//     const [selectedDay, setSelectedDay] = useState(undefined)
//     const [description, setDescription] = useState('');
//     const FORMAT = 'MM/dd/yyyy';

//     const dayChange = (day, modifiers, dayPickerInput) => {
//         format(day, 'MM.dd.yyyy');
//         setSelectedDay(day)
//         const input = dayPickerInput.getInput();
//         setSchedule(input.value);
//     }

//     const handleChange = async (e) => {
//         setStudentId(e.target.value)
//     };

//     const getNames = (e) => {
//         for (let i = 0; i < students.length; i++) {
//             if (students[i]._id === studentId) {
//                 setStudentName(students[i].username);
//                 setStudentEmail(students[i].email);
//             }
//         }
//     }

//     useEffect(() => {
//         getNames();
//     });

//     const handleForm = async (e) => {
//         e.preventDefault();
//         // check for for errors`

//         // make sure values are filled in and valid

//         let email = studentEmail;

//         let timeStamp = parse(schedule, 'MM/dd/yyyy', new Date());

//         let studentId = mongoose.Types.ObjectId(studentId);

//         const eventInput = {
//             studentId: studentId,
//             studentName: studentName,
//             date: timeStamp,
//             dayRef: schedule,
//             time: time,
//             description: description,
//         };

//         const sendEmailInput = {
//             email: 'nelsontjohns@gmail.com',
//             senderName: 'Nelson',
//             toEmail: email,
//             subject: `New lesson on ${schedule}`,
//             text: `This is an autmated reminder that you have a new lesson scheduled with Nelson Johns on ${schedule} at ${time}`
//         }

//         // if the input is valid, send it to server
//         try {
//             await addEvent({ variables: { AddEventInput: eventInput, SendEmailInput: sendEmailInput } });
//             alert('lesson added');
//         } catch (err) {
//             console.log(err);
//         }
//         setStudentId('');
//         setStudentName('');
//         setStudentEmail('');
//         setDescription('');
//     };

//     return (
//         // <Card className="p-4 m-4">
//         //     <Card.Header>
//         //         <Card.Title tag="h5">Schedule Overview</Card.Title>
//         //     </Card.Header>
//         //     <Card.Body className="d-flex justify-content-center">
//         //         <div >
//         //         <CalEl />
//         //         </div>
//         //     </Card.Body>
//         //     <Card.Footer>
//         //         <hr />
//         //         <div className="stats">
//         //         </div>
//         //     </Card.Footer>
//         // </Card>
//         <Card className="shadow-lg">
//             <Card.Header>
//                 <Card.Title className="text-center">Schedule Overview</Card.Title>
//                 {/* <p className="text-center">24 Hours performance</p> */}
//                 <SchedulelNav />
//             </Card.Header>
//             <Card.Body className="d-flex justify-content-center">
//                 <div>
//                     <CalEl />
//                 </div>
//             </Card.Body>
//             <Card.Footer>
//                 <hr />
//                 <div className="stats">
//                     <i className="fa fa-history" /> Updated 3 minutes ago
//                 </div>
//             </Card.Footer>
//         </Card>
//     )
// }

