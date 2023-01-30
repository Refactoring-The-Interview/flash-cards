import { NavDropdown } from "react-bootstrap";
import { Paths } from "../../../Apis/types";

export const LoggedOut = () => {
    return (
        <NavDropdown title={"Sign Up"} id="basic-nav-dropdown">
            <NavDropdown.Item href={Paths.contact}>Contact</NavDropdown.Item>
            <>
                <NavDropdown.Divider />
                <NavDropdown.Item href={Paths.login}>Sign Up</NavDropdown.Item>
            </>
        </NavDropdown>
    );
};
