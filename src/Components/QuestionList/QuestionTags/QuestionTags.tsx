import { Badge, Button, ListGroup } from "react-bootstrap";
import { Tags } from "../../../Apis/types";

interface QuestionTagsProps {
    tags: Tags[];
}

export const QuestionTags = ({ tags }: QuestionTagsProps) => {
    return (
        <ListGroup>
            <h5 style={{ color: "black" }}>Tags:</h5>
            {tags.map((tag: Tags, index: number) => {
                return (
                    <ListGroup.Item>
                        <Badge>{tag}</Badge>
                    </ListGroup.Item>
                );
            })}
        </ListGroup>
    );
};
