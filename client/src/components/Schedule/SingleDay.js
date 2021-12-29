import { Row, Col, Card } from 'react-bootstrap';

const myDay = [
    {
        id: "0",
        hour: "2pm",
        time: "14",
    },
    {
        id: "1",
        hour: "3pm",
        time: "15",
    },
    {
        id: "2",
        hour: "4pm",
        time: "16",
    },
    {
        id: "3",
        hour: "5pm",
        time: "17",
    },
    {
        id: "4",
        hour: "6pm",
        time: "18",
    },
    {
        id: "5",
        hour: "7pm",
        time: "19",
    },
    {
        id: "6",
        hour: "8pm",
        time: "20",
    },
    {
        id: "7",
        hour: "9pm",
        time: "21",
    },
    {
        id: "8",
        hour: "10pm",
        time: "22",
    },

]

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
        overflow: 'scroll'
    },
};

export default function SingleDay() {

    return (
        <Card style={styles.dayCard}>
            {myDay.map((day) => (
                <Row  className='px-3'>
                    <Col xs={4} style={styles.hour}>
                        <p>{day.hour}</p>
                    </Col >
                    <Col xs={8} style={styles.row}>
                    
                    </Col>
                </Row>
            ))}
        </Card>
    )
}