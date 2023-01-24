import { ListGroup } from "react-bootstrap";
import resume from "../../Assets/SamBrandonResume.pdf";

export const Contact = () => {
    return (
        <ListGroup>
            <ListGroup.Item variant="primary">Contact Info</ListGroup.Item>
            <ListGroup.Item>Email: SamBranodn0432@yahoo.com</ListGroup.Item>
            <ListGroup.Item>Phone: +1(510)-856-6441</ListGroup.Item>
            <ListGroup.Item>Location: Knoxville, TN</ListGroup.Item>

            <ListGroup.Item>
                <iframe src={resume} title="resume"></iframe>
            </ListGroup.Item>
        </ListGroup>
    );
};
