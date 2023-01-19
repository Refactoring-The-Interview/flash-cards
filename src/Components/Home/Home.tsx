import { CardGroup } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import "./HomeS.scss";

export const Home = () => {
    return (
        <div className="Home">
            <Card className="Home-card">
                <Card.Body className="Home-body">
                    <CardGroup>
                        <Card.Title>Refactoring The Interview</Card.Title>
                        <Card.Subtitle>
                            Tools to refactor the code for engineering
                            interviews - Alex & Sam
                        </Card.Subtitle>
                        <Card.Text>
                            The Goal of Refactoring The Interview is to assist
                            Engineers in the Interview process, by providing
                            questions that have real world applications for the
                            job, and then the tools to use the theoretical
                            knowledge in an Interview style environment. We seek
                        </Card.Text>
                        <Card.Text>
                            to fill the gap that Interview prep providers have.
                            A lack of structure in how we guild you thought
                            Interview prep. All to often there are only the
                            theoretical Interview questions that have no real
                            impact on the job. or having you build out a
                            Component or algorithm, but then failing to show the
                            applications of how to use that in a real world job.
                        </Card.Text>
                    </CardGroup>
                </Card.Body>

                <CardGroup className="Home-footer">
                    <Card.Footer>
                        <Card.Link href="/">Alex</Card.Link>
                        <Card.Link href="https://github.com/SBrandon0432">
                            Sam
                        </Card.Link>
                        <Card.Link href="https://github.com/Refactoring-The-Interview/flash-cards">
                            github
                        </Card.Link>
                    </Card.Footer>
                </CardGroup>
            </Card>
        </div>
    );
};
