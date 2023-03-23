import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Paths, pathGenerator } from "../../Apis/types";
import { StorageKey, useLocalStorage } from "../LocalStorage/LocalStorage";
import { useRandomQuestion } from "../Utils/useRandomQuestion";
import { LoggedIn } from "./LoggedIn/LoggedIn";
import { LoggedOut } from "./LoggedOut/LoggedOut";
import "./NavBarS.scss";

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
        <div>
            <Navbar bg="light" expand="lg" fixed="top" className="NavBar">
                <Container className="Container-NavBar">
                    <Navbar.Brand href="#home">R.T.I.</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href={Paths.home}>Home</Nav.Link>

                            {!isEmail && <LoggedOut />}

                            {isEmail && (
                                <LoggedIn
                                    path={randomQuestionPath}
                                    value={userInfo}
                                    setValue={setUserInfo}
                                />
                            )}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};
