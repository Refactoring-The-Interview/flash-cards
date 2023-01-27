import "./NavBarS.scss";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { StorageKey, useLocalStorage } from "../LocalStorage/LocalStorage";
import { useRandomQuestion } from "../Utils/useRandomQuestion";
import { Paths, pathGenerator } from "../../Apis/types";

export const NavBar = () => {
    const [userInfo, setUserInfo] = useLocalStorage(StorageKey.userInfo, {
        email: "",
        password: "",
    });
    const idGenerator = useRandomQuestion();
    const randomId = idGenerator ? idGenerator.id : "3";
    const randomQuestionPath = pathGenerator[Paths.question](randomId);
    const isEmail = userInfo.email.length > 1;

    return (
        <div className="NavBar">
            <Navbar bg="light" expand="lg" fixed="top">
                <Container>
                    <Navbar.Brand href="#home">R.T.I.</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href={Paths.home}>Home</Nav.Link>

                            {isEmail && (
                                <>
                                    <Nav.Link href={Paths.questionList}>
                                        Question List
                                    </Nav.Link>
                                    <Nav.Link href={randomQuestionPath}>
                                        Random Question
                                    </Nav.Link>
                                </>
                            )}

                            <NavDropdown
                                title={isEmail ? userInfo.email : "Sign Up"}
                                id="basic-nav-dropdown"
                            >
                                {isEmail && (
                                    <NavDropdown.Item href="#action/3.1">
                                        Profile
                                    </NavDropdown.Item>
                                )}
                                <NavDropdown.Item href={Paths.contact}>
                                    Contact
                                </NavDropdown.Item>

                                {!isEmail && (
                                    <>
                                        <NavDropdown.Divider />
                                        <NavDropdown.Item href={Paths.login}>
                                            Sign Up
                                        </NavDropdown.Item>
                                    </>
                                )}

                                {isEmail && (
                                    <>
                                        <NavDropdown.Divider />
                                        <NavDropdown.Item
                                            onClick={() => {
                                                setUserInfo({
                                                    email: "",
                                                    password: "",
                                                });
                                            }}
                                            href={Paths.login}
                                        >
                                            Logout
                                        </NavDropdown.Item>
                                    </>
                                )}
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};
