import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Index from "./pages/index";
import Post from "./pages/post";
import App from "./App";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children:[{
        index: true,
        element: <Index />,
      },{
        path: "/posts/:id",
        element: <Post />,
      },
    ]
  },
  
]);


export default function AppRouter() {
  return <RouterProvider router={router} />;
}
