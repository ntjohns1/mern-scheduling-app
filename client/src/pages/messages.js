import { Container, Card, Button, Table } from "react-bootstrap";
import AddMessage from "../components/Messages/AddMessage";
import PortalNav from "../components/PortalNav";

// Create AddMessage componenet
// query to populate dropdown
// remember to add .populate for messages in your resolver
// Create AddMessageBtn component
// mutation to add message
// remember to add .populate for messages in your resolver
// Create MessageHistory component
// Deal with logic for sorting messages from a specific student

export default function Messages() {
    const students = [
        {
            label: 'Timmy Hanson',
            value: 'Timmy Hanson',
        },
        {
            label: 'Rachel Johnson',
            value: 'Rachel Johnson',
        },
        {
            label: 'Jim Jackson',
            value: 'Jim Jackson',
        },
    ];
    const messages = [
        {
            id: '1',
            date: '08/12/2021',
            text: 'Practice Scales',
        },
        {
            id: '2',
            date: '08/13/2021',
            text: 'Lesson cancelled next week.',

        },
        {
            id: '3',
            date: '08/14/2021',
            text: 'Call to reschedule.',
        },
    ];

    return (
        <Container>
            <PortalNav />
            <Card>
                <h3>Student Messenger</h3>
                <AddMessage students={students}/>
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
                <div id="manageMessages" class="card-body">
                    <Table>
                        <thead>
                            <tr>
                                <th scope="col"></th>
                                <th scope="col">Message</th>
                                <th scope="col"></th>
                                <th scope="col"></th>
                            </tr>
                        </thead>
                        <tbody>
                            {messages.map((message) => (
                                <tr key={message._id}>
                                    <th scope="row">{message.date}:  </th>
                                    <td><textarea id="pastMessageTxt"
                                        class="form-control">{message.text}</textarea>
                                    </td>
                                    <td>
                                        <Button
                                            id="editBtn"
                                            variant="info"
                                            type="button"
                                            style={{
                                                left: '80%',
                                            }}>
                                            Update
                                        </Button>
                                    </td>
                                    <td>
                                        <Button
                                            id="deleteBtn"
                                            variant="danger"
                                            type="button"
                                            style={{
            
                                                left: '90%',
                                            }}>
                                            Delete
                                        </Button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                </div>
            </Card>
        </Container>

    )
}