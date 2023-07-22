import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import Error from "../pages/Error/Error";
import Profile from "../pages/Profile/Profile";
import DetailsPage from "../pages/DetailsPage/DetailsPage";
const router = createBrowserRouter([
      {
            path:'/',
            element:<Main></Main>,
            errorElement:<Error></Error>,
            children:[
                  {
                        path:'/',
                        element:<Home></Home>
                  },
                  {
                        path:'login',
                        element:<Login></Login>
                  },
                  {
                        path:'register',
                        element:<Register></Register>
                  },
                  {
                        path:'profile',
                        element:<Profile></Profile>
                  },
                  {
                        path:'college/:id',
                        element:<DetailsPage></DetailsPage>,
                        loader:({params})=> fetch(`http://localhost:5000/college/${params.id}`)
                       
                  }
            ]
      }
])

export default router;