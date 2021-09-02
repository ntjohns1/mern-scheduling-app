import { Container } from "react-bootstrap";
import PortalNav from "../components/PortalNav";
export default function Portal() {
    return (
        <Container>
            <PortalNav />
            <div className="my-4">
                <h3>Welcome to the teacher portal!</h3>
                <p>Use the above tabs to:</p>
                <ul>
                    <li>Manage Students: Add and Remove Students, Update existing student information</li>
                    <li>Manage Schedules: Select students to view their scheduled lessons. Add lessons to the schedule. Update and cancel lessons.</li>
                    <li>Lesson Messages: Write lesson messages to your students and view history of lesson messages.</li>
                </ul>
            </div>
        </Container>
    )
};