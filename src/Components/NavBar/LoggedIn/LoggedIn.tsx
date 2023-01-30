import { Nav, NavDropdown } from "react-bootstrap";
import { Paths, userInfo } from "../../../Apis/types";

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

            <NavDropdown title={value.email} id="basic-nav-dropdown">
                <NavDropdown.Item href="#action">Profile</NavDropdown.Item>

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
