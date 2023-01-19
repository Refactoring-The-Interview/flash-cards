import { Button, CardGroup } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import "./HomeS.scss";
import { Paths } from "../store/types";

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
                            knowledge in an Interview style environment.
                        </Card.Text>
                        <Card.Text>
                            We seek to fill the gap that Interview prep
                            providers have. A lack of structure in how they
                            guild you thought Interview prep. All to often there
                            are only the theoretical Interview questions that
                            have no real impact on the job. or having you build
                            out a Component or algorithm, but then failing to
                            show the applications of how to use that in a real
                            world job. We provide Questions that are theoretical
                            but also how that knowledge is applicable to the
                            position, Then the environment to use the knowledge
                            in a job like code environment. We invite you to
                            join our community and refactor how you Interview
                            prep, but also how you look to solve a problem and
                            broaden your tools to solve the problem.
                        </Card.Text>
                    </CardGroup>

                    <Card>
                        <Card.Img variant="top" src="/" alt="Logo-refactor" />
                        <Card.Body>
                            <Card.Title>Refactoring The Interview</Card.Title>
                            <Card.Text>
                                Tools to refactor the code for engineering
                                interviews
                            </Card.Text>
                            <Button variant="primary" href={Paths.login}>
                                Join Now!
                            </Button>
                        </Card.Body>
                    </Card>
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
