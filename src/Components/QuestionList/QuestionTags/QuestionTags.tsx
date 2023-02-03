import { Badge, CardGroup, FormGroup } from "react-bootstrap";
import { Tags } from "../../../Apis/types";

interface TagProps {
    tags: Tags[];
}

export const QuestionTags = ({ tags }: TagProps) => {
    tags.sort().reverse();

    return (
        <CardGroup>
            {tags.map((tag: Tags, index: number) => {
                return (
                    <Badge pill bg="dark">
                        {tag}
                    </Badge>
                );
            })}
        </CardGroup>
    );
};
