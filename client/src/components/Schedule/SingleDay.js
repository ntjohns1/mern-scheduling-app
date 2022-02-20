import { useEffect } from 'react';
import { Row, Col, Card, Toast } from 'react-bootstrap';
import myDay from '../../utils/helpers/times';
import { useQuery } from '@apollo/client';
import { useDispatch, useSelector } from 'react-redux';
import { EVENTS_BY_DATE } from '../../utils/queries';
import { GET_EVENTS_BY_DATE } from '../../store/actions';
import "react-day-picker/lib/style.css";
import { format, parse } from 'date-fns';


const styles = {
    textarea: {
        background: 'transparent',
        border: 'none',
        resize: 'none',
        color: 'black',
        borderLeft: '1px solid black',
        padding: '10px',
        width: '100%',
        height: '100%'
    },
    description: {
        whiteSpace: 'pre-wrap'
    },
    row: {
        whiteSpace: 'pre-wrap',
        height: '40px',
        borderTop: '1px solid black'
    },
    hour: {
        backgroundColor: '#ffffff',
        color: '#000000',
        borderTop: '1px dashed #000000',
        fontSize: '12px'
    },
    dayCard: {
        height: "50vh",
        overflowY: 'scroll'
    },
};

export default function SingleDay({ dayRef }) {
    const dispatch = useDispatch();
    const events = useSelector((state) => Object.values(state.events));

    const { loading, data } = useQuery(EVENTS_BY_DATE, {
        variables: { dayRef: dayRef },
    });
    const lesson = data?.eventsByDate || [];

    useEffect(() => {
        if (events.length === 0 && data) {
            dispatch({
                type: GET_EVENTS_BY_DATE,
                payload: data.eventsByDate
            })
        }
    }, [loading, data, dispatch]);

    let lessonObj = {...lesson}
    const timeObj = myDay.map((t) => {
        let tObj = {...t}
        for (let i = 0; i < lesson.length; i++) {
          if (lessonObj[i].time === tObj.time) {
            tObj.student = lessonObj[i].studentName;
          }
        }
        return tObj
    })

    console.log(timeObj);

    return (
        <Card>
            <Card.Title className='mt-3'> {dayRef} </Card.Title >
            <Card.Body style={styles.dayCard} scrollTo>
                {timeObj.map((day, index) => (
                    <Toast className='px-3' key={index}>
                        <Col xs={4} >
                            <p>{day.hour}</p>
                        </Col >
                        <Col xs={8} >
                            <p>{day.student}</p>
                        </Col>
                    </Toast>
                ))}
            </Card.Body>
        </Card>
    )
}