import { Container } from "react-bootstrap";
import Auth from '../utils/auth'


export default function StudentPotal() {
    const loggedStatus = Auth.loggedIn();
    return (
        <Container fluid>
            <h2>Site Under Construction</h2>
        </Container>
    )
};