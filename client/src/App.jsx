import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Layout from "@components/Layout";
import Home from "@screens/HomeScreen";
import ErrorScreen from "@screens/Error";
import { Provider } from "react-redux";
import store from "store";

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
  return (
    <Provider store={store}>
      <RouterProvider router={router} />;
    </Provider>
  );
};

export default App;
