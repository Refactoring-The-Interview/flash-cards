import { Badge } from "react-bootstrap";

export const QuestionTags = ({ tags }: any) => {
    return (
        <div>
            {tags.map((tag: string, index: number) => {
                return (
                    <Badge bg="dark" key={index}>
                        {tag.toLocaleUpperCase()}
                    </Badge>
                );
            })}
        </div>
    );
};
