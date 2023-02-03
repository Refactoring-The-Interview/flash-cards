import { Badge } from "react-bootstrap";

interface BadgeProps {
    correct: boolean;
}

export const IsCorrectBadge = ({ correct }: BadgeProps) => {
    const variant = correct ? "success" : "danger";
    return <Badge bg={variant}>answer</Badge>;
};
