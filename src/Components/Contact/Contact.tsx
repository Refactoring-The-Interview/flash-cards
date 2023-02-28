import { ListGroup } from "react-bootstrap";
import resume from "../../Assets/SamBrandonResume.pdf";
import "./ContentS.scss";

export const Contact = () => {
    return (
        <ListGroup className="Contact">
            <ListGroup.Item variant="primary">Contact Info</ListGroup.Item>
            <ListGroup.Item>Email: SamBranodn0432@gamil.com</ListGroup.Item>
            <ListGroup.Item>Phone: +1(510)-856-6441</ListGroup.Item>
            <ListGroup.Item>Location: Knoxville, TN</ListGroup.Item>

            <ListGroup.Item className="resume-container">
                <iframe src={resume} title="resume" className="resume"></iframe>
            </ListGroup.Item>
        </ListGroup>
    );
};
