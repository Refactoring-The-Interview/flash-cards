import React, { Component } from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import App from "./Components/App/App";
// import reportWebVitals from './reportWebVitals';
import "./Sass/main.scss";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./Components/Errors/ErrorPage";

import "@aws-amplify/ui-react/styles.css"; // Ensure React UI libraries are styled correctly
import { Amplify } from "aws-amplify";
import awsconfig from "./aws-exports";
Amplify.configure(awsconfig); // Configures the Amplify libraries with the cloud backend set up via the Amplify CLI

interface Props {
    path: string;
    element: Component;
    errorElement: Component | void;
    children: [];
}

const router: Props | any = createBrowserRouter([
    {
        path: "*",
        element: <App />,
        errorElement: <ErrorPage />,
        children: [],
    },
]);

const root = ReactDOM.createRoot(
    document.getElementById("root") as HTMLElement
);
root.render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
