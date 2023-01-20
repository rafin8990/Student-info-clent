import { createBrowserRouter } from "react-router-dom";
import AddStudent from "../AddStudent/AddStudent";
import Home from "../Home/Home";
import StudentDetails from "../Home/StudentDetails/StudentDetails";
import Update from "../Home/Update/Update";
import Main from "../Layout/Main";
import Login from "../Register/Login";
import Register from "../Register/Register";
import PrivateRoute from "./PrivateRoute";

export const router =createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children:([
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/students/:id',
                element:<StudentDetails></StudentDetails>,
                loader:({params})=>fetch(`https://student-info-server.vercel.app/students/${params.id}`)
            },
            {
                path:'/add',
                element:<PrivateRoute><AddStudent></AddStudent></PrivateRoute>
            },
            {
                path:'/student/:id',
                element:<Update></Update>
            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/register',
                element:<Register></Register>
            }
        ])
    }
])