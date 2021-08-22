import { Container } from "react-bootstrap";
import PortalNav from "../components/PortalNav";

export default function Calendar() {
    return (
        <Container className='text-center'>
            <PortalNav />
                <h2>Calendar</h2>
            <iframe
                src="https://calendar.google.com/calendar/embed?height=600&amp;wkst=1&amp;bgcolor=%23ffffff&amp;ctz=America%2FChicago&amp;src=bXVzaWNub3Rlc2xlc3NvbnNAZ21haWwuY29t&amp;src=ZW4udXNhI2hvbGlkYXlAZ3JvdXAudi5jYWxlbmRhci5nb29nbGUuY29t&amp;color=%23039BE5&amp;color=%230B8043&amp;title=Lesson%20Schedule&amp;showPrint=0&amp;showCalendars=1"
                title="calendar" width="800" height="600" frameborder="0" scrolling="no"></iframe>
        </Container>
    )
};