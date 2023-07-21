import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import Error from "../pages/Error/Error";
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
                  }
            ]
      }
])

export default router;