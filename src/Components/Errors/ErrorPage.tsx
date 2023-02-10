import { useRouteError } from "react-router-dom";

interface Props {
    statusText: string;
    message: string;
    error: undefined | string;
}

export default function ErrorPage() {
    const error = useRouteError() as Props;
    console.error(error);

    return (
        <div id="error-page">
            <h1>Oops!</h1>
            <p>Sorry, an unexpected error has occurred.</p>
            <p>
                <i>{error.statusText || error.message}</i>
            </p>
        </div>
    );
}
