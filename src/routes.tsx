import { RouteObject, createBrowserRouter } from "react-router-dom";
import ErrorPage from "./ErrorPage";
import AboutMe from "./views/AboutMe";
import Root from "./Root";
import Work from "./views/Work";
import Contact from "./views/Contact";
import Home from "./views/Home";

export const routes = [
    {
        title: "Home",
        path: "/",
        element: <Home />,
        visible: false,
    },
    {
        title: "About Me",
        path: "/me",
        element: <AboutMe />,
        visible: true,
    },
    {
        title: "Work",
        path: "/work",
        element: <Work />,
        visible: true,
    },
    {
        title: "Contact",
        path: "/contact",
        element: <Contact />,
        visible: true,
    },
];

const getRouteObject = (): RouteObject[] => {
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

const router = createBrowserRouter(getRouteObject());

export default router;
