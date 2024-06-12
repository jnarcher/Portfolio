import { RouteObject, createBrowserRouter } from "react-router-dom";
import ErrorPage from "./ErrorPage";
import AboutMe from "./views/AboutMe";
import Root from "./Root";
import Work from "./views/Work";
import Home from "./views/Home";
import Education from "./views/Education";
import Projects from "./views/Projects";

export const routes = [
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
        element: <Work />,
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

const getRouteObjects = (): RouteObject[] => {
    let routeObj: RouteObject[] = [
        {
            path: "/",
            element: <Root />,
            errorElement: <ErrorPage />,
            children: [],
        },
    ];

    routes.map((r) => {
        routeObj[0].children?.push({
            path: r.path,
            element: r.element,
        });
    });

    return routeObj;
};

const router = createBrowserRouter(getRouteObjects());

export default router;
