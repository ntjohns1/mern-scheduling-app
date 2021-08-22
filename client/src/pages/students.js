import { Container } from 'react-bootstrap';
import PortalNav from '../components/PortalNav';
export default function Students() {
    return (
        <Container>
        <PortalNav />
        <div class="my-4">
            <h3>Welcome to Student Management!</h3>

            <div class="card p-4 m-4">
                <div class="card-header">
                    <h4>View Current Students</h4>
                </div>
                <div class="card-body">
                    <table class="table">
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
                                <th scope="row" class="update-studentId" value="{{user.id}}">ID</th>
                                <td><textarea class="update-firstname">firstName</textarea></td>
                                <td><textarea class="update-lastname">lastName</textarea></td>
                                <td><textarea class="update-email">email</textarea></td>
                                <td><button class="btn btn-info update-student-btn" value="{{user.id}}"
                                    type="button">Update</button></td>
                                <td><button class="btn btn-danger delete-student-btn" value="{{user.id}}"
                                    type="button">Delete</button></td>
                            </tr>
                        </tbody>
                    </table>
                </div>

            </div>

            <div class="card p-4 m-4">
                <div class="card-header">
                    <h4>Add New Student</h4>
                </div>
                <div class="card-body"></div>
                <p>Please note that when creating a student, their password is randomly generated. The password, which you
                    will need to write down and share with your student, will appear in a pop up window.</p>
                <p>The student will need the email address and the generated password to log in.</p>
                <form class="form add-student-form">
                    <div class="form-group">
                        <label for="firstName-createStudent">Student First Name:</label>
                        <input class="form-input" type="text" id="firstName-createStudent" />
                    </div>
                    <div class="form-group">
                        <label for="lastName-createStudent">Student Last Name:</label>
                        <input class="form-input" type="text" id="lastName-createStudent" />
                    </div>
                    <div class="form-group">
                        <label for="email-createStudent">Student Email:</label>
                        <input class="form-input" type="text" id="email-createStudent" />
                    </div>
                    <div class="form-group">
                        <button class="btn btn-success" type="submit">Add Student</button>
                    </div>
                </form>
            </div>
        </div>
        </Container>
    )
};