import{
    createBrowserRouter,
    RouterProvider,
}from "react-router-dom";

export const router = createBrowserRouter([

{
    path:"/",
    element:<MainLayout/>,
    children: [
        {
            index:true,
            element:<HomePage/>
        },


        {
            

        }
    ]
}

]);