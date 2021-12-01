import { Container } from "react-bootstrap";
import Messenger from "../components/Messages/Messenger";
import PortalNav from "../components/PortalNav";
import Auth from "../utils/auth";

export default function Messages() {
    const loggedStatus = Auth.loggedIn();
    const isTeacher = Auth.getProfile().data.isTeacher;

    return (
        <Container>
            <PortalNav />

            {loggedStatus && isTeacher ? (
                <Messenger />
            ) : (
                <>
                    <h2>
                        You must be logged in as a teacher to access this page.
                    </h2>
                </>
            )}
        </Container>

    );
};

