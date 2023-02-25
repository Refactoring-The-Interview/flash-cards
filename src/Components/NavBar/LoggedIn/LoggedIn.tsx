import { Nav, NavDropdown, Navbar } from "react-bootstrap";
import { Paths, pathGenerator, userInfo } from "../../../Apis/types";
import duck from "../../../Assets/IMGS/Mallard2.jpeg";
import { useContext } from "react";
import { MyQuestionContext } from "../../Context/QuestionContext";

interface LoggedInProps {
    path: string;
    value: userInfo;
    setValue(value: userInfo): void;
}

export const LoggedIn = ({ path, value, setValue }: LoggedInProps) => {
    const { questions } = useContext(MyQuestionContext);
    const randomId = Math.floor(
        Math.random() * questions.length + 1
    ).toString();

    return (
        <>
            <Nav.Link href={Paths.questionList}>Question List</Nav.Link>
            <Nav.Link href={pathGenerator[Paths.question](randomId)}>
                Random Question
            </Nav.Link>

            <NavDropdown
                title={
                    <Navbar.Brand>
                        <img src={duck} alt="profile" width="30" height="30" />
                    </Navbar.Brand>
                }
                id="basic-nav-dropdown"
            >
                <NavDropdown.Item href={Paths.profile}>
                    Profile
                </NavDropdown.Item>

                <NavDropdown.Item href={Paths.contact}>
                    Contact
                </NavDropdown.Item>

                <NavDropdown.Divider />
                <NavDropdown.Item
                    onClick={() => {
                        setValue({
                            email: "",
                            password: "",
                        });
                    }}
                    href={Paths.login}
                >
                    Logout
                </NavDropdown.Item>
            </NavDropdown>
        </>
    );
};
