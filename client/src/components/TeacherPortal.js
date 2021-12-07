import { Container, Col, Row, Card } from "react-bootstrap";
import Sidebar from "./Sidebar/Sidebar";
import NewLesson from "./Schedule/NewLesson";
import Auth from '../utils/auth'


export default function TeacherPortal() {
    const loggedStatus = Auth.loggedIn();
    const isTeacher = Auth.getProfile().data.isTeacher;
    return (
        <Container fluid>
            <Row>
        <Col xs={2}>
        <Sidebar />
        </Col>
        <Col xs={10}>
        {loggedStatus && isTeacher ? (
            <NewLesson />
        ) : (
            <>
                <h2>
                    You must be logged in as a teacher to access this page.
                </h2>
            </>
        )}
        </Col>
        </Row>
    </Container>
    )
};