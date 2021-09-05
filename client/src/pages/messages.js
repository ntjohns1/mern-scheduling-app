import { Container, Card } from "react-bootstrap";
import SelectStudent from "../components/Messages/SelectStudent";
import PortalNav from "../components/PortalNav";

export default function Messages() {

    return (
        <Container>
            <PortalNav />
            <Card>
                <h3>Student Messenger</h3>
                <SelectStudent />
            </Card>
            <Card>
            </Card>
        </Container>

    )
}