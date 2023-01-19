import "./NavBarS.scss";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { StorageKey, useLocalStorage } from "../LocalStorage/LocalStorage";

export const NavBar = ({ setShowQuestionList }: any) => {
    const [userInfo, setUserInfo] = useLocalStorage(StorageKey.userInfo, {
        email: "",
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
                            <Nav.Link href="/flash-card">Home</Nav.Link>
                            <Nav.Link href="/question-list">
                                Question List
                            </Nav.Link>
                            <Nav.Link href="/flash-card">
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
                                <NavDropdown.Item
                                    href="#action/3.4"
                                    onClick={() => {
                                        setUserInfo({
                                            email: "",
                                            password: "",
                                        });
                                    }}
                                >
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
