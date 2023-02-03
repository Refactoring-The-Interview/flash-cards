import { Badge } from "react-bootstrap";
import { Tags } from "../../../Apis/types";

interface QuestionTagsProps {
    tags: Tags[];
}

export const QuestionTags = ({ tags }: QuestionTagsProps) => {
    tags.sort();

    return (
        <div>
            {tags.map((tag: Tags) => {
                return <Badge bg="warning">{tag}</Badge>;
            })}
        </div>
    );
};
