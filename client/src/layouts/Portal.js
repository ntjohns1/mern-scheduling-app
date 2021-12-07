import { Container, Col, Row, Card } from "react-bootstrap";
import TeacherPortal from "../components/TeacherPortal";
import StudentPotal from "../components/StudentPortal";
import Auth from '../utils/auth'

export default function Portal() {
    const isTeacher = Auth.getProfile().data.isTeacher;
    return (
        <Container fluid>
            {isTeacher ? (
                <TeacherPortal />
            ) : (
                <>
                    <StudentPotal />
                </>
            )}
        </Container>
    )
};