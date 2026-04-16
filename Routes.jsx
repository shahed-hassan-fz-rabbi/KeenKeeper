import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Homepage from "../pages/Homepage/Homepage";
import Books from "../pages/Books/Books";
import ErrorPage from "../pages/ErrorPages/ErrorPages";


export const router = createBrowserRouter
([

{
  path: "/",
  element: <MainLayout />,
   errorElement: <ErrorPage />,
  children: [
    {
      index: true,
      element: <Homepage />

    },
    {
      path: "books",
      element : <Books />

    }
  ],

 
}


]);