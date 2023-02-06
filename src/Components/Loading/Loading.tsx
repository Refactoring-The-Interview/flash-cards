import { Badge, Spinner } from "react-bootstrap";

interface Props {
    message?: string;
}

export const Loading = ({ message }: Props) => {
    return (
        <>
            <h1>
                <Badge>
                    {message ? message : "Loading your page!"}
                    <Spinner animation="border" variant="warning">
                        <span className="visually-hidden">Loading...</span>
                    </Spinner>
                </Badge>
            </h1>
        </>
    );
};
