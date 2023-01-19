import Card from "react-bootstrap/Card";

export const Home = () => {
    return (
        <div className="Home">
            <Card>
                <Card.Body>
                    <Card.Title>title</Card.Title>

                    <Card.Text>
                        text about our goal and mission statement
                    </Card.Text>

                    <Card.Footer>
                        <Card.Link>Alex</Card.Link>
                        <Card.Link>Sam</Card.Link>
                        <Card.Link>github</Card.Link>
                    </Card.Footer>
                </Card.Body>
            </Card>
        </div>
    );
};
