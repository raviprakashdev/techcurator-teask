import "./App.css";
import React, { useState } from "react";
import dashboradlogo from "../src/Images/low-bars.png";
import assessmentslogo from "../src/Images/healthicons_i-exam-multiple-choice-outline.png";
import candidateslogo from "../src/Images/Group.png";
import librarylogo from "../src/Images/codicon_library.png";
import pricinglogo from "../src/Images/icons8_price-tag.png";
import Dashboard from "./Components/Dashboard";
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
} from "reactstrap";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <Router>
            <div>
                <Navbar expand="md" light className="nav-bg-color py-3">
                    <NavbarBrand></NavbarBrand>
                    <NavbarToggler onClick={toggle} />
                    <Collapse isOpen={isOpen} navbar>
                        <Nav className="mr-auto " navbar>
                            <NavItem>
                                <NavLink
                                    href="/components/"
                                    className="nav-text"
                                >
                                    <img
                                        src={dashboradlogo}
                                        alt="Logo"
                                        style={{
                                            verticalAlign: "middle",
                                            marginTop: "-4px",
                                        }}
                                    />
                                    DASHBOARD
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink
                                    href="https://github.com/reactstrap/reactstrap"
                                    className="nav-text"
                                >
                                    <img
                                        src={assessmentslogo}
                                        alt="Logo"
                                        style={{
                                            verticalAlign: "middle",
                                            marginTop: "-4px",
                                        }}
                                    />
                                    ASSESSMENTS
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink
                                    href="https://github.com/reactstrap/reactstrap"
                                    className="nav-text activeClick"
                                >
                                    <img
                                        src={candidateslogo}
                                        alt="Logo"
                                        style={{
                                            verticalAlign: "middle",
                                            marginTop: "-4px",
                                        }}
                                    />
                                    CANDIDATES
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink
                                    href="https://github.com/reactstrap/reactstrap"
                                    className="nav-text"
                                >
                                    <img
                                        src={librarylogo}
                                        alt="Logo"
                                        style={{
                                            verticalAlign: "middle",
                                            marginTop: "-4px",
                                        }}
                                    />
                                    LIBRARY
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink
                                    href="https://github.com/reactstrap/reactstrap"
                                    className="nav-text"
                                >
                                    <img
                                        src={pricinglogo}
                                        alt="Logo"
                                        style={{
                                            verticalAlign: "middle",
                                            marginTop: "-4px",
                                        }}
                                    />
                                    PRICING
                                </NavLink>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Navbar>
            </div>
            <div className="App">
                <Switch>
                    <Route path="/">
                        <Dashboard />
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}

export default App;
