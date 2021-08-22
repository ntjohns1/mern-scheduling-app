import { Container } from "react-bootstrap";
import PortalNav from "../components/PortalNav";

export default function Schedule() {
    return (
        <Container>
        <PortalNav />
        <h3>Welcome to Schedule Management!</h3>
        <div class="card p-4 m-4">
            <div class="card-header">
                <h3>Schedule a Lesson</h3>
            </div>
            <div class="card-body"></div>
            <form class="form scheduleLessonForm">
                <div class="form-group">
                    <label for="studentName-scheduleLesson" class="form-label">Student Name: </label>
                    <select class="form-select" aria-label="studentName-scheduleLesson" id="studentName-scheduleLesson">
                        <option selected>Select a Student</option>
                        {/* {{#each students as |user|}} */}
                        <option>'ID, Firstname Last Name'</option>
                        {/* {{/each}} */}
                    </select>
                </div>

                <div class="form-group">
                    <label for="date-scheduleLesson" class="form-label">Select Date: </label>
                    <input id="datepicker" width="276" />
                   <p>***datepicker***</p>
                </div>

                <div class="form-group">
                    <label for="startTime-scheduleLesson" class="form-label">Select Time: </label>
                    <select class="form-select p-2 m-3" aria-label="startTime-scheduleLesson"
                        id="startTime-scheduleLesson">
                        <option selected>Select Time</option>
                        <option value="10">10:00am</option>
                        <option value="11">11:00am</option>
                        <option value="12">12:00am</option>
                        <option value="13">1:00pm</option>
                        <option value="14">2:00pm</option>
                        <option value="15">3:00pm</option>
                        <option value="16">4:00pm</option>
                        <option value="17">5:00pm</option>
                        <option value="18">6:00pm</option>

                    </select>
                </div>

                <div class="form-group">
                    <button class="btn btn-secondary" type="submit">Schedule Lesson</button>
                </div>

            </form>
        </div>
    </Container>
    )
}