import PortalNav from "../components/PortalNav"
import { Jumbotron } from "react-bootstrap";

export default function Home() {
    return (
        <>
        <PortalNav />
        <Jumbotron>
            <h1 class="text-center">Welcome to <i class="fas fa-play-circle"></i> Music Notes</h1>
            <p class="text-center">An interactive platform for music teachers and students to communicate helpful information.</p>
        </Jumbotron>
        </>
    )
};