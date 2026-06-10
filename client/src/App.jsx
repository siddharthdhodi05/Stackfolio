import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Layout from "@components/Layout";
import Home from "@screens/HomeScreen";
import ErrorScreen from "@screens/Error";
import { Provider } from "react-redux";
import store from "./store";
import LoginScreen from "@screens/Login";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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
      {
        path: "/login",
        element: <LoginScreen />,
      },
    ],
  },
]);

const App = () => {
  return (
    <Provider store={store}>
      <RouterProvider router={router} />;
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar
      />
    </Provider>
  );
};

export default App;
