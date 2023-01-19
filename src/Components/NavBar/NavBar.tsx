import "./NavBarS.scss";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Routes, Route, useNavigate } from "react-router-dom";
import { StorageKey, useLocalStorage } from "../LocalStorage/LocalStorage";
import { randomizer } from "../QuestionRandomizer/randomizer";

export const NavBar = ({
    redirectUserQuestions,
    redirectUserFlashCard,
    setShowQuestionList,
}: any) => {
    const [userInfo, setUserInfo] = useLocalStorage(StorageKey.userInfo, {
        email: "Sign Up",
        password: "",
    });

    return (
        <div className="NavBar">
            <Navbar bg="light" expand="lg" fixed="top">
                <Container>
                    <Navbar.Brand href="#home">R.T.I.</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="#home">Home</Nav.Link>
                            <Nav.Link
                                onClick={() => {
                                    setShowQuestionList(true);
                                    redirectUserQuestions();
                                }}
                            >
                                Question List
                            </Nav.Link>
                            <Nav.Link
                                onClick={() => {
                                    setShowQuestionList(false);
                                    redirectUserFlashCard();
                                }}
                            >
                                Random Question
                            </Nav.Link>

                            <NavDropdown
                                title={userInfo.email}
                                id="basic-nav-dropdown"
                            >
                                <NavDropdown.Item href="#action/3.1">
                                    Profile
                                </NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">
                                    Contact
                                </NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">
                                    Logout
                                </NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};
