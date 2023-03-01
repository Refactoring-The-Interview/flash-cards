import { Nav, NavDropdown, Navbar } from "react-bootstrap";
import { Paths, userInfo } from "../../../Apis/types";
import duck from "../../../Assets/IMGS/Mallard2.jpeg";

interface LoggedInProps {
    path: string;
    value: userInfo;
    setValue(value: userInfo): void;
}

export const LoggedIn = ({ path, value, setValue }: LoggedInProps) => {
    return (
        <>
            <Nav.Link href={Paths.questionList}>Question List</Nav.Link>
            <Nav.Link href={path}>Random Question</Nav.Link>

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
