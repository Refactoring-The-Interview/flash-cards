import { Badge } from "react-bootstrap";
import { Tags } from "../../../Apis/types";

export const QuestionTags = ({ tags }: { tags: Tags[] }) => {
    return (
        <div>
            {tags.map((tag) => (
                <div>tag: {tag},</div>
            ))}
            {tags.map((tag: string, index: number) => {
                return (
                    <Badge bg="dark" key={index}>
                        {tag?.toLocaleUpperCase()}
                    </Badge>
                );
            })}
        </div>
    );
};
