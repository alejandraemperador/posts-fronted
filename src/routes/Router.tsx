import { createBrowserRouter } from "react-router-dom";
import Detail from '../pages/detail/Detail';
import Landing from '../pages/landing/Landing';



export const router = createBrowserRouter([
    {
        path: "/",
        element: <Landing />,
    },
    {
        path: "/detail/:id",
        element: <Detail />,
    },
]);
