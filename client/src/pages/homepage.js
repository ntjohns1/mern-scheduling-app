import PortalNav from "../components/PortalNav"
import { Jumbotron, Container } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Auth from '../utils/auth';



export default function Home() {
    const loggedStatus = Auth.loggedIn();
    const isTeacher = Auth.getProfile().data.isTeacher;
    return (
        <Container>
            <PortalNav />
            {loggedStatus && isTeacher ? (
        < Jumbotron >
                <h1 className="text-center">Welcome to <FontAwesomeIcon icon={"play-circle"} /> Music Notes</h1>
                <p className="text-center">An interactive platform for music teachers and students to communicate helpful information.</p>
            </Jumbotron >
            ) : (
                <>
                    <h2>
                        You must be logged in as a teacher to access this page.
                    </h2>
                </>
            )}
        </Container>
    )
};