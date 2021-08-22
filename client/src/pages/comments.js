import { Container } from "react-bootstrap";
import PortalNav from "../components/PortalNav";
export default function Comments() {
    return (
        <Container>
            <PortalNav />
            <div class="my-4">
                <h3>Welcome to Comment Management!</h3>
                <select id="userSelect" class="form-select" aria-label="Select a Student">
                </select>
                <button id="userSelectBtn" class="btn btn-secondary" type="submit">GO</button>
                <div id="addComment" class="form-group">
                    <label for="commentTextarea">Add a Comment</label>
                    <textarea class="form-control" id="commentTextarea" rows="3"></textarea>
                    <button id="addCommentBtn" type="submit" class="btn btn-info">Add Comment</button>
                </div>
                <div class="card p-4 m-4">
                    <div id="manageComments" class="card-body">
                        <table>
                            <thead>
                                <tr>
                                    <th scope="col"></th>
                                    <th scope="col">Comment</th>
                                    <th scope="col"></th>
                                    <th scope="col"></th>
                                </tr>
                            </thead>
                            <tbody>
                                {/* map through students */}
                                <tr>
                                    <th scope="row">commentID</th>
                                    <td><textarea id="pastCommentTxt"
                                        class="form-control">Date, Content</textarea>
                                    </td>
                                    <td><button id="editBtn" class="btn btn-info"
                                        type="button">Update</button>
                                    </td>
                                    <td><button id="deleteBtn" class="btn btn-danger"
                                        type="button">Delete</button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </Container>

    )
}