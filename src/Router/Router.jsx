import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import Error from "../pages/Error/Error";

import DetailsPage from "../pages/DetailsPage/DetailsPage";
import College from "../pages/College/College";
import CollegeDetails from "../pages/CollegeDetails/CollegeDetails";
import PrivateRoute from "./PrivateRouter";
import Admission from "../pages/Admission/Admission";
import AdmissionForm from "../pages/AdmissionForm/AdmissionForm";
import MyCollege from "../pages/MyCollege/MyCollege";
import ReviewForm from "../pages/Reviews/Reviews";
import ProfilePage from "../pages/ProfilePage/ProfilePage";
import UpdateProfile from "../pages/UpdateProfile/UpdateProfile";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "register",
        element: <Register></Register>,
      },
      {
        path: "profile",
        element: <ProfilePage></ProfilePage>,
      },
      {
        path: "college/:id",
        element: (
          <PrivateRoute>
            <DetailsPage></DetailsPage>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/college/${params.id}`),
      },
      {
        path: "college",
        element: <College></College>,
      },
      {
        path: "colleges/:id",
        element: (
          <PrivateRoute>
            <CollegeDetails></CollegeDetails>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/college/${params.id}`),
      },
      {
        path: "admission",
        element: <Admission></Admission>,
      },
      {
        path: "admission/:id",
        element: <AdmissionForm></AdmissionForm>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/college/${params.id}`),
      },
      {
        path: "my-college",
        element: <MyCollege></MyCollege>,
      },
      {
        path: "review/:id",
        element: <ReviewForm></ReviewForm>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/students/${params.id}`),
      },
      {
            path:'update-profile',
            element:<UpdateProfile></UpdateProfile>
      }
    ],
  },
]);

export default router;
