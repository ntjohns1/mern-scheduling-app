import { Container, Card, Form, Button, Table } from "react-bootstrap";
import PortalNav from "../components/PortalNav";
export default function Comments() {
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
    const comments = [
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
                <h3>Welcome to Comment Management!</h3>
                <Form>
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
                    <Form.Group id="addComment">
                        <Form.Label></Form.Label>
                        <Form.Control
                            as="textarea"
                            placeholder="Leave a comment here"
                            style={{ height: '100px' }}
                        />
                    </Form.Group>
                    <Button
                        as='input'
                        className='my-2'
                        type='submit'
                    // value='addLesson' 
                    />
                </Form>
            </Card>
            <Card>
                <div id="manageComments" class="card-body">
                    <Table>
                        <thead>
                            <tr>
                                <th scope="col"></th>
                                <th scope="col">Comment</th>
                                <th scope="col"></th>
                                <th scope="col"></th>
                            </tr>
                        </thead>
                        <tbody>
                            {comments.map((comment) => (
                                <tr>
                                    <th scope="row">{comment.date}:  </th>
                                    <td><textarea id="pastCommentTxt"
                                        class="form-control">{comment.text}</textarea>
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