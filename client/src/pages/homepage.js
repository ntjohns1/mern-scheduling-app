import PortalNav from "../components/PortalNav"
import { Jumbotron, Container } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


export default function Home() {
    return (
        <Container>
        <PortalNav />
        <Jumbotron>
            <h1 className="text-center">Welcome to <FontAwesomeIcon icon={"play-circle"}/> Music Notes</h1>
            <p className="text-center">An interactive platform for music teachers and students to communicate helpful information.</p>
        </Jumbotron>
        </Container>
    )
};