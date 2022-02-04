import { Row, Col, Card, Toast } from 'react-bootstrap';
import myDay from '../../utils/helpers/times';


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


export default function SingleDay() {
    return (
        <Card>
            <Card.Title className='mt-3'> DoW MM/DD </Card.Title >
            <Card.Body style={styles.dayCard} scrollTo>
                {myDay.map((day) => (
                    <Toast className='px-3'>
                        <Col xs={4} >
                            <p>{day.hour}</p>
                        </Col >
                        <Col xs={8} >

                        </Col>
                    </Toast>
                ))}
            </Card.Body>
        </Card>
    )
}