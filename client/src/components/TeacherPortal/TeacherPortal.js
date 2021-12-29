import { Container, Col, Row } from "react-bootstrap";
import Sidebar from "../Sidebar/Sidebar";
import StudentOverview from "./StudentOverview/StudentOverview";
import Auth from '../../utils/auth'
import ScheduleContainer from "./ScheduleOverview/ScheduleContainer";


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
                        <Container>
                            <Row>
                                <Col xs={3}>
                                    <div className="p-3">
                                        <StudentOverview />
                                    </div>
                                </Col>
                                <Col xs={9}>
                                    <div className="p-3">
                                        <ScheduleContainer />
                                    </div>
                                </Col>
                            </Row>
                        </Container>
                    ) : (
                        <>
                            <h2>
                                You must be logged in as a teacher to access this page.
                            </h2>
                        </>
                    )}
                </Col>
            </Row>
        </Container >
    )
};