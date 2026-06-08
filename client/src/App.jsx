import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Layout from "@components/Layout";
import Home from "@screens/HomeScreen";
import ErrorScreen from "@screens/Error";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorScreen />,
    children: [
      {
        index: true,
        element: <Home />,
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
