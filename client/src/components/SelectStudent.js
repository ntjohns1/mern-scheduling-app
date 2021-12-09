import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useQuery } from '@apollo/client';
import { Form } from 'react-bootstrap';
import { GET_STUDENTS } from '../utils/queries';
import { FETCH_ALL_USERS } from '../store/actions';

export default function SelectStudent() {
    const [studentId, setStudentId] = useState('');
    const dispatch = useDispatch();
    const user = useSelector((state) => Object.values(state.user));
    console.log(user);

    // populate table with list of students
    const { loading, data } = useQuery(GET_STUDENTS);
    const students = data?.users || [];



    useEffect(() => {
        //fetchUsers();

        if (user.length === 0 && data) {
            dispatch({
                type: FETCH_ALL_USERS,
                payload: data.users
            })
        }
    }, [loading, data, dispatch]);

    const handleChange = async (e) => {
        setStudentId(e.target.value)
    };

    return (
        <Form.Group>
            <Form.Group className='mb-3'>
                <Form.Label className='mb-2'>Select A Student: </Form.Label><br />
                <Form.Control
                    as="select"
                    name='selectStudent'
                    value={studentId}
                    onChange={handleChange}
                >
                    <option value=''> Select a Student </option>
                    {students && students.map((option) => (
                        <option value={option._id} key={option._id}>{option.username}</option>
                    ))}
                </Form.Control>
            </Form.Group>
        </Form.Group>
    )
};