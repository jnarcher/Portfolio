import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "./ErrorPage";
import AboutMe from "./views/AboutMe";
import Root from "./Root";
import Experience from "./views/Experience";
import Home from "./views/Home";
import Education from "./views/Education";
import Projects from "./views/Projects";

export const views = [
    {
        title: "Home",
        path: "/",
        element: <Home />,
        sidebar: false,
    },
    {
        title: "About Me",
        path: "/me",
        element: <AboutMe />,
        sidebar: true,
    },
    {
        title: "Experience",
        path: "/experience",
        element: <Experience />,
        sidebar: true,
    },
    {
        title: "Projects",
        path: "/projects",
        element: <Projects />,
        sidebar: true,
    },
    {
        title: "Education",
        path: "/education",
        element: <Education />,
        sidebar: true,
    },
];

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        errorElement: <ErrorPage />,
        children: views.map((view) => ({
            path: view.path,
            element: view.element,
        })),
    },
]);

export default router;
