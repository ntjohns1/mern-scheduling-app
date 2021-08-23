import { Card, Container, Table, Form, Button } from 'react-bootstrap';
import PortalNav from '../components/PortalNav';
export default function Students() {
    return (
        <Container className='p-4 my-4'>
            <PortalNav />
            <h3 className='text-center'>Welcome to Student Management!</h3>
            <Card className='p-4 my-4'>
                <Card.Header>
                    <h4>View Current Students</h4>
                </Card.Header>
                <Card.Body>
                    <Table responsive>
                        <thead>
                            <tr>
                                <th scope="col">ID</th>
                                <th scope="col">First</th>
                                <th scope="col">Last</th>
                                <th scope="col">Email</th>
                                <th scope="col"></th>
                                <th scope="col"></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                {/* Map Props Here */}
                                <th scope="row" class="update-studentId" value="{{user.id}}">ID</th>
                                <td><textarea class="update-firstname">firstName</textarea></td>
                                <td><textarea class="update-lastname">lastName</textarea></td>
                                <td><textarea class="update-email">email</textarea></td>
                                <td><Button
                                    variant='info'
                                    value="{{user.id}}"
                                    type="button">
                                    Update
                                </Button></td>
                                <td><Button
                                    variant='danger'
                                    value="{{user.id}}"
                                    type="button">
                                    Delete
                                </Button></td>
                            </tr>
                        </tbody>
                    </Table>
                </Card.Body>

            </Card>

            <Card>
                <Card.Header>
                    <h4>Add New Student</h4>
                </Card.Header>
                <Card.Body className="p-3">
                    <p>Please note that when creating a student, their password is randomly generated. The password, which you
                        will need to write down and share with your student, will appear in a pop up window.</p>
                    <p>The student will need the email address and the generated password to log in.</p>
                    <Form className="mb-3 px-3">
                        <Form.Group className="mb-3 px-3" controlId="studentFirstName">
                            <Form.Label>Student First Name</Form.Label>
                            <Form.Control type="text" />
                        </Form.Group>
                        <Form.Group className="mb-3 px-3" controlId="studentLastName">
                            <Form.Label>Student Last Name</Form.Label>
                            <Form.Control type="text" />
                        </Form.Group>
                        <Form.Group className="mb-3 px-3" controlId="studentFirstName">
                            <Form.Label>Student Email</Form.Label>
                            <Form.Control type="email" />
                            <Form.Text className="text-muted">
                                We'll never share your email with anyone else.
                            </Form.Text>
                        </Form.Group>
                        <Button
                            className="mx-3"
                            variant="success"
                            type="submit">
                            Add Student
                        </Button>
                    </Form>
                </Card.Body>
            </Card>
        </Container>
    )
};