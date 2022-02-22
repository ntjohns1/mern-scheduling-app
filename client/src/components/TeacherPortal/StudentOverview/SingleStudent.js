import { from } from "@apollo/client";
import React from "react";
import { useParams } from 'react-router-dom';
import { useQuery } from "@apollo/client";
import { GET_STUDENT } from "../../../utils/queries"
import { Card, Row, Col, Form, FormGroup, Button } from 'react-bootstrap';

function SingleStudent({ students }) {

  const { studentId } = useParams();
  // eslint-disable-next-line
  const { loading, data } = useQuery(GET_STUDENT, {
    // Pass the `productId` URL parameter into query to retrieve this product's data
    variables: { _id: studentId },
  });

  const student = data?.user || {};


  function goToPortal() {
    document.location.replace(`/portal`);
  }

  let address = {...student.address}
  console.log(address);

  return (
    <>
      <div className="content">
        <Row>
          <Col md="4">
            <Card className="card-user">
              <Card.Body>
                <div className="author">
                  <img
                    alt="..."
                    className="avatar border-gray"
                    src={"http://placecorgi.com/260/180"}
                  />
                  <h5 className="title">{student.username}</h5>
                </div>
              </Card.Body>
              <Card.Footer>
                <hr />
                <div className="button-container">
                  <Row>
                    <Col className="ml-auto" lg="3" md="6" xs="6">
                      <h5>
                        12 <br />
                        <small>Files</small>
                      </h5>
                    </Col>
                    <Col className="ml-auto mr-auto" lg="4" md="6" xs="6">
                      <h5>
                        2GB <br />
                        <small>Used</small>
                      </h5>
                    </Col>
                    <Col className="mr-auto" lg="3">
                      <h5>
                        24,6$ <br />
                        <small>Spent</small>
                      </h5>
                    </Col>
                  </Row>
                </div>
              </Card.Footer>
            </Card>

          </Col>
          <Col md="8">
            <Card className="card-user">
              <Card.Header>
                <Card.Title tag="h5">Edit Profile</Card.Title>
              </Card.Header>
              <Card.Body>
                <Form>
                  <Row>
                    <Col className="px-1" md="3">
                      <FormGroup>
                        <label>Username</label>
                        <Form.Control
                          defaultValue={student.username}
                          placeholder="Username"
                          type="text"
                        />
                      </FormGroup>
                    </Col>
                    <Col className="pl-1" md="4">
                      <FormGroup>
                        <label htmlFor="exampleInputEmail1">
                          Email address
                        </label>
                        <Form.Control
                          defaultValue={student.email}
                          placeholder="Email"
                          type="email" />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="pr-1" md="6">
                      <FormGroup>
                        <label>First Name</label>
                        <Form.Control
                          defaultValue={student.firstName}
                          placeholder="Company"
                          type="text"
                        />
                      </FormGroup>
                    </Col>
                    <Col className="pl-1" md="6">
                      <FormGroup>
                        <label>Last Name</label>
                        <Form.Control
                          defaultValue={student.lastName}
                          placeholder="Last Name"
                          type="text"
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col md="12">
                      <FormGroup>
                        <label>Address</label>
                        <Form.Control
                          defaultValue={address.street1}
                          placeholder="Home Address"
                          type="text"
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col md="12">
                      <FormGroup>
                        <label>Address</label>
                        <Form.Control
                          defaultValue={address.street2}
                          placeholder="Home Address"
                          type="text"
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="pr-1" md="4">
                      <FormGroup>
                        <label>City</label>
                        <Form.Control
                          defaultValue={address.city}
                          placeholder="City"
                          type="text"
                        />
                      </FormGroup>
                    </Col>
                    <Col className="px-1" md="4">
                      <FormGroup>
                        <label>State</label>
                        <Form.Control
                          defaultValue={address.state}
                          placeholder="State"
                          type="text"
                        />
                      </FormGroup>
                    </Col>
                    <Col className="pl-1" md="4">
                      <FormGroup>
                        <label>Zip Code</label>
                        <Form.Control 
                        defaultValue={address.zip}
                        placeholder="ZIP Code" 
                        type="text" />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col md="6">
                      <FormGroup>
                        <label>Primary Phone</label>
                        <Form.Control
                          defaultValue={address.phone1}
                          type="text"
                        />
                      </FormGroup>
                    </Col>
                    <Col md="6">
                      <FormGroup>
                        <label>Secondary Phone</label>
                        <Form.Control
                          defaultValue={address.phone2}
                          type="text"
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col md="12">
                      <FormGroup>
                        <label>Contact Name 1</label>
                        <Form.Control
                          defaultValue={address.parentGuardian1}
                          type="text"
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col md="12">
                      <FormGroup>
                        <label>Contact Name 2</label>
                        <Form.Control
                          defaultValue={address.parentGuardian2}
                          type="text"
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col md="12">
                      <FormGroup>
                        <label>Contact Name 3</label>
                        <Form.Control
                          defaultValue={address.parentGuardian3}
                          type="text"
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <div className="update ml-auto mr-auto py-4">
                      <Button
                        className="btn-round"
                        color="primary"
                        type="submit"
                      >
                        Update Profile
                      </Button>
                      <Button
                        className="btn-round"
                        color="primary"
                        onClick={() => goToPortal()}
                      >
                        Go Back
                      </Button>
                    </div>
                  </Row>
                </Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
}


export default SingleStudent;
