import{
    createBrowserRouter,
    RouterProvider,
}from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import HomePage from "../HomePage/HomePage";
import Timeline from "../Timeline/Timeline";
import Stats from "../stats/Stats";


export const router = createBrowserRouter([

{
    path:"/",
    element:<MainLayout/>,
    children: [
        {
            index:true,
            path: "/",
            element:<HomePage/>
        },
        {
            path: "timeline",
            element: <Timeline/>
        },
        {
            path : "stats",
            element: <Stats/>
        }

    ]
}

]);