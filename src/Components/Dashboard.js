import React from "react";
import { Container, Row, Col, Progress } from "reactstrap";
import thumbUp from "../Images/thumbUp.png";
import thumpDown from "../Images/thumbDown.png";

const Dashboard = () => {
    return (
        <Container fluid="xs">
            <Row className="h-100 m-0">
                <Col md="8" className="ml-4">
                    <Container>
                        <h1 className="candidate-heading mt-5">
                            Demo Candidate
                        </h1>

                        <Row className="mt-3">
                            <Col md="2" className="candidate-field">
                                Email:
                            </Col>
                            <Col className="candidate-field">
                                democandidate@gmail.com
                            </Col>
                        </Row>
                        <Row>
                            <Col md="2" className="candidate-field">
                                Phone:
                            </Col>
                            <Col className="candidate-field">
                                +91 9909087654
                            </Col>
                        </Row>
                        <Row>
                            <Col md="2" className="candidate-field">
                                Assessment:
                            </Col>
                            <Col className="candidate-field">
                                Sample assessment(java + javascript + coding)
                            </Col>
                        </Row>
                        <Row>
                            <Col md="2" className="candidate-field">
                                Status:
                            </Col>
                            <Col className="candidate-field">
                                <div
                                    style={{
                                        backgroundColor: "#C4C4C4",
                                        width: "fit-content",
                                        borderRadius: "5px",
                                        textDecoration: "underline",
                                    }}
                                    className="px-3"
                                >
                                    failed
                                </div>
                            </Col>
                        </Row>
                        <Row>
                            <Col md="2" className="candidate-field">
                                Action:
                            </Col>
                            <Col className="candidate-field">
                                {/* <div style={{backgroundColor:"#C4C4C4",width:"fit-content",borderRadius:"5px",textDecoration:"underline"}} className="px-3">failed</div> */}
                                <div>
                                    <img
                                        src={thumbUp}
                                        alt="Logo"
                                        style={{
                                            verticalAlign: "middle",
                                            marginTop: "-4px",
                                        }}
                                        className="mr-4"
                                    />
                                    <img
                                        src={thumpDown}
                                        alt="Logo"
                                        style={{
                                            verticalAlign: "middle",
                                            marginTop: "-4px",
                                        }}
                                    />
                                </div>
                            </Col>
                        </Row>
                        <Row>
                            <Col md="2" className="candidate-field">
                                Created:
                            </Col>
                            <Col className="candidate-field">
                                11/11/11 10:22:22 AM
                            </Col>
                        </Row>
                        <Row>
                            <Col md="2" className="candidate-field">
                                Started:
                            </Col>
                            <Col className="candidate-field">
                                11/11/11 10:22:22 AM
                            </Col>
                        </Row>
                        <Row>
                            <Col md="2" className="candidate-field">
                                Ended:
                            </Col>
                            <Col className="candidate-field">
                                11/11/11 10:22:22 AM
                            </Col>
                        </Row>
                    </Container>
                    <Container>
                        <Row>
                            <Col md="8" className="">
                                <h1 className="candidate-heading mt-5 mb-5">
                                    Skill's profile
                                </h1>

                                <Row className="my-4">
                                    <Col>
                                        <div className="d-flex justify-content-between">
                                            <span>javaScript</span>
                                            <span>44%</span>
                                        </div>

                                        <div>
                                            <Progress value="44" />
                                        </div>
                                    </Col>
                                </Row>
                                <Row className="my-4">
                                    <Col>
                                        <div className="d-flex justify-content-between">
                                            <span>Java</span>
                                            <span>30%</span>
                                        </div>

                                        <div>
                                            <Progress value="30" />
                                        </div>
                                    </Col>
                                </Row>
                                <Row className="my-4">
                                    <Col>
                                        <div className="d-flex justify-content-between">
                                            <span>Coding</span>
                                            <span>43%</span>
                                        </div>

                                        <div>
                                            <Progress value="43" />
                                        </div>
                                    </Col>
                                </Row>
                                
                            </Col>
                        </Row>
                    </Container>
                </Col>
                <Col className="">
                    <div
                        style={{
                            height: "320px",
                            width: "320px",
                            backgroundColor: "#EFEFEF",
                            borderRadius: "10px",
                            margin: "auto",
                            position: "relative",
                        }}
                        className="d-flex align-items-center justify-content-center mt-5"
                    >
                        <div
                            style={{
                                position: "absolute",
                                top: "20px",
                                left: "30px",
                            }}
                        >
                            Score
                        </div>
                        <div className="row d-flex justify-content-center mt-100">
                            <div className="col">
                                <div className="progressown blue">
                                    <span className="progressown-left">
                                        <span className="progressown-bar"></span>{" "}
                                    </span>
                                    <span className="progressown-right">
                                        <span className="progressown-bar"></span>{" "}
                                    </span>
                                    <div className="progressown-value">64%</div>
                                </div>
                                
                            </div>
                        </div>
                        <div
                            style={{
                                position: "absolute",
                                bottom: "20px",
                                left: "30px",
                            }}
                            className="d-flex"
                        >
                            <span className="d-flex align-item-center mr-2">
                                <div
                                    style={{
                                        height: "15px",
                                        width: "15px",
                                        backgroundColor: "#000000",
                                        borderRadius: "50%",
                                    }}
                                    className="m-auto"
                                ></div>
                            </span>
                            80 out of 150 points
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default Dashboard;
