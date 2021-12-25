import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useQuery } from '@apollo/client';
import { Container, Spinner } from 'react-bootstrap';
import { GET_STUDENTS } from '../../utils/queries';
import { FETCH_ALL_USERS } from '../../store/actions';
import StudentList from './StudentList';

export default function StudentTable() {
    // redux
    const dispatch = useDispatch();
    const user = useSelector((state) => Object.values(state.user));
    // populate table with list of students
    const { loading, data } = useQuery(GET_STUDENTS);
    const students = data?.users || [];

 

    useEffect(() => {
        //fetchUsers();

        if(user.length === 0 && data) {
            dispatch({
                type: FETCH_ALL_USERS,
                payload: data.users
            })
        }
    }, [loading, data, dispatch]); 

    return (
        <Container>
            <h3 className='text-center'>Welcome to Student Management!</h3>
            <h4 className='my-4 text-center'>View Current Students</h4>
            <div className='p-4 my-4 d-flex justify-content-center'>
                {loading ? (
                       <Spinner animation="border" role="status">
                       <span className="visually-hidden">Loading...</span>
                     </Spinner>
                ) : (
                    <div>
                        {students && students.map((student) => (
                            <StudentList students={student} key={student._id} />
                        ))}
                    </div>
                )}
            </div>
        </Container>
    )
}