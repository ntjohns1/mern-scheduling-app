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
                {/* <Form>
                    <Form.Group>
                        <Form.Label for="student-scheduleLesson" className='mb-2'>Select A Student: </Form.Label><br />
                        <Form.Control
                            as="select"
                            name='selectStudent'
                        //  value={formState.studentName}
                        >
                            {students.map((option) => (
                                <option value={option.value} key={option.value}>{option.label}</option>
                            ))}
                        </Form.Control>
                    </Form.Group>
                    <Form.Group id="addMessage">
                        <Form.Label></Form.Label>
                        <Form.Control
                            as="textarea"
                            placeholder="Leave a message here"
                            style={{ height: '100px' }}
                        />
                    </Form.Group>
                    <Button
                        as='input'
                        className='my-2'
                        type='submit'
                    // value='addLesson' 
                    />
                </Form> */}
            </Card>
            <Card>
            </Card>
        </Container>

    )
}