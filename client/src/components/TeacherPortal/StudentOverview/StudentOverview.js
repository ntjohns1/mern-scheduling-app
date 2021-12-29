import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useQuery } from '@apollo/client';
import { Card, Spinner } from 'react-bootstrap';
import { GET_STUDENTS } from '../../../utils/queries';
import { FETCH_ALL_USERS } from '../../../store/actions';
import StudentTag from './StudentTag';

export default function StudentOverview() {
    // redux
    const dispatch = useDispatch();
    const user = useSelector((state) => Object.values(state.user));

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

    return (
            <div className='p-4 m-4 d-flex justify-content-center'>
                {loading ? (
                    <Spinner animation="border" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </Spinner>
                ) : (
                    <div>
                        <Card style={{ width: '18rem' }} className="mx-4 shadow-lg">
                            <Card.Body>
                                <Card.Title className='text-center'>Students</Card.Title>
                                {students && students.map((student) => (
                                    <StudentTag students={student} key={student._id} />
                                ))}
                            </Card.Body>
                        </Card>
                    </div>

                )}
            </div>
    )
}